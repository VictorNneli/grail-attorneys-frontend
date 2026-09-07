import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedPosts } from '../lib/posts';
import type { Post } from '../types';

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    getPublishedPosts()
      .then((data) => {
        setPosts(data);
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div>
      <section className="bg-cream px-8 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-maroon mb-4">
          Chambers Insights & Legal Commentary
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Authoritative analysis on Nigerian jurisprudence, constitutional rights,
          commercial regulations, and Eastern Nigeria property law.
        </p>
      </section>

      <section className="px-8 py-16 max-w-4xl mx-auto">
        {status === 'loading' && <p className="text-center text-gray-500">Loading posts...</p>}

        {status === 'error' && (
          <p className="text-center text-red-600">
            Unable to load posts right now. Please try again later.
          </p>
        )}

        {status === 'loaded' && posts.length === 0 && (
          <p className="text-center text-gray-500">No posts published yet.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              to={`/blog/${post.slug}`}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {post.coverImage && (
                <img src={post.coverImage} alt={post.title} className="w-full h-40 object-cover" />
              )}
              <div className="p-4">
                <h3 className="font-serif font-bold text-maroon mb-2">{post.title}</h3>
                <p className="text-xs text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;