import { SITE } from '@/config/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# ${SITE.name}

> ${SITE.description}

## Pages

- [Home](${SITE.url}): Homepage
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
