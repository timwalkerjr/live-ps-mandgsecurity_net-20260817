/**
 * Remark plugin that injects a Table of Contents after the intro paragraphs
 * (before the first ## heading). Controlled by frontmatter `toc` field:
 * - toc: true (default) — inject TOC after intro
 * - toc: false — no TOC
 *
 * Only injects when there are 3+ headings (h2/h3).
 */

function remarkTocAfterIntro() {
  return () => {
    // TOC is rendered in the sidebar via the TableOfContents component
    return;
  };
}

function extractText(node) {
  let text = '';
  if (node.children) {
    for (const child of node.children) {
      if (child.type === 'text') {
        text += child.value;
      } else if (child.children) {
        text += extractText(child);
      }
    }
  }
  return text;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function buildTocHtml(headings) {
  const items = headings
    .map((h) => {
      const indent = h.depth === 3 ? ' class="remark-toc-sub"' : '';
      return `<li${indent}><a href="#${h.slug}">${escapeHtml(h.text)}</a></li>`;
    })
    .join('\n      ');

  return `<nav class="remark-toc not-prose">
    <p class="remark-toc-title">Table of Contents</p>
    <ul>
      ${items}
    </ul>
  </nav>`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default remarkTocAfterIntro;
