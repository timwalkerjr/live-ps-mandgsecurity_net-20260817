// @ts-check
import cloudflare from '@astrojs/cloudflare';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { sessionDrivers } from 'astro/config';
import { globSync } from 'glob';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import remarkGfm from 'remark-gfm';

import remarkToc from './src/plugins/remark-toc.mjs';

const siteUrl = process.env.SITE_URL || 'https://example.com';
const projectRoot = dirname(fileURLToPath(import.meta.url));

// Scan pages once at config load for noIndex={true} so we can exclude them
// from the sitemap. Matches the runtime behaviour of the noIndex prop in
// BaseLayout/SEOHead, which renders <meta name="robots" content="noindex">.
function collectNoIndexPaths() {
  const files = globSync('src/pages/**/*.astro', { cwd: projectRoot });
  const paths = new Set();
  for (const file of files) {
    if (/\[.*\]/.test(file)) continue;
    const content = readFileSync(join(projectRoot, file), 'utf-8');
    if (!/noIndex\s*=\s*\{\s*true\s*\}/.test(content)) continue;
    let route = file.replace(/^src\/pages/, '').replace(/\.astro$/, '');
    if (route.endsWith('/index')) route = route.slice(0, -'index'.length);
    if (route === '') route = '/';
    if (!route.endsWith('/')) route += '/';
    paths.add(route);
  }
  return paths;
}

const noIndexPaths = collectNoIndexPaths();

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  adapter: cloudflare({
    imageService: 'passthrough',
    prerenderEnvironment: 'node',
  }),
  // Astro 6 + @astrojs/cloudflare 13 auto-provision a SESSION KV namespace
  // per deploy. Pinning a non-KV driver tells the adapter "sessions are
  // handled" so it skips emitting the SESSION binding. Our pages are static
  // and never call Astro.session at runtime.
  session: {
    driver: sessionDrivers.lruCache(),
  },
  site: siteUrl,
  // CSRF origin check for form-encoded POST/PUT/PATCH/DELETE. This is the
  // Astro 5/6 default; pinned explicitly so a template edit can't silently
  // disable it. Note it does NOT cover /api/auth/* (JSON posts) — those are
  // protected by Better Auth trustedOrigins in the auth integration.
  security: {
    checkOrigin: true,
  },
  integrations: [
    // MDX support for blog posts, docs, and content
    mdx(),
    // Generate sitemap.xml, excluding pages flagged noIndex={true}
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
        return !noIndexPaths.has(normalized);
      },
    }),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
    },
    // Astro 7 defaults to the Sätteri pipeline; keep the remark/rehype
    // pipeline so our custom remark-toc plugin (and remark-gfm) still apply.
    processor: unified({ remarkPlugins: [remarkGfm, remarkToc] }),
  },
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
