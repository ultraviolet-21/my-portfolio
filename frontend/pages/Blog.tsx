// Blog page, lists all posts with links to the full post

import { Link } from 'react-router-dom';
import { posts, formatPostDate } from '../src/blog/posts';

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Blog</h1>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg hover:border-cyan-400 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-1" style={{ color: 'white' }}>
              {post.title}
            </h2>
            <p className="text-sm text-slate-400 mb-3">
              {formatPostDate(post.date)}
            </p>
            <p className="text-slate-400">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
