// Blog post page, loads and renders a single markdown post by its URL slug

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { posts, formatPostDate } from '../src/blog/posts';

// Lazily loads the raw markdown source for each post, keyed by file path.
// Vite resolves this glob at build time; only the matching post's markdown
// is fetched when its loader is actually called.
const postFiles = import.meta.glob('../src/blog/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>;

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const meta = posts.find((post) => post.slug === slug);

  const [content, setContent] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setContent(null);
    setNotFound(false);

    const loader = postFiles[`../src/blog/${slug}.md`];
    if (!meta || !loader) {
      setNotFound(true);
      return;
    }

    loader().then((raw) => setContent(raw));
  }, [slug, meta]);

  if (notFound) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-gray-500 mb-4">Post not found.</p>
        <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 underline">
          ← Back to blog
        </Link>
      </div>
    );
  }

  if (!meta || content === null) {
    return <div className="text-left py-20">Loading post...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 underline">
        ← Back to blog
      </Link>
      <h1 className="text-4xl font-bold mt-4 mb-2 text-gray-900">{meta.title}</h1>
      <p className="text-sm text-gray-800 mb-8">{formatPostDate(meta.date)}</p>
      <article
        className="text-left text-gray-900 leading-relaxed
          [&_p]:mb-4 [&_p:last-child]:mb-0
          [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-gray-500 [&_h1]:mt-6 [&_h1]:mb-4
          [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-500 [&_h2]:mt-6 [&_h2]:mb-4
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-500 [&_h3]:mt-4 [&_h3]:mb-6
          [&_a]:text-cyan-400 [&_a]:underline [&_a]:hover:text-cyan-300
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
          [&_li]:mb-1
          [&_code]:bg-slate-800 [&_code]:px-1 [&_code]:rounded [&_code]:text-sm
          [&_pre]:bg-slate-900 [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:mb-4
          [&_blockquote]:border-l-4 [&_blockquote]:border-slate-700 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:mb-4"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
