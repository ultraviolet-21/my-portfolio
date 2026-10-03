// Metadata for all blog posts. The markdown body for each entry lives in
// a sibling file named `<slug>.md` in this same folder.

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string; // ISO date, e.g. "2026-10-03"
  excerpt: string;
}

// `new Date("2026-10-03")` parses the string as UTC midnight, but
// `.toLocaleDateString()` then renders it in the viewer's local timezone —
// so anyone west of UTC sees the previous day. Parsing the components
// ourselves and building the Date with the local-time constructor avoids
// that round trip through UTC entirely.
export function formatPostDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString();
}

export const posts: BlogPostMeta[] = [
  { 
    slug: 'Book Repository',
    title: 'Book Repository',
    date: '2026-10-03',
    excerpt: 'An in-depth explanation of Book Repository, my program to help students find affordable textbooks.',
  }
];
