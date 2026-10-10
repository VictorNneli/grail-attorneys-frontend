import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedPosts } from '../lib/posts';
import type { Post } from '../types';

const RecentPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPublishedPosts()
      .then((data) => setPosts(data.slice(0, 5)))
      .catch(() => setPosts([]));
  }, []);

  return (
    <aside>
      <h2 className="font-serif text-lg font-bold text-gray-900 mb-3">Recent Posts</h2>

      {posts.length === 0 ? (
        <p className="text-sm text-gray-500">No posts yet.</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post._id}>
              <Link
                to={`/blog/${post.slug}`}
                className="text-sm font-semibold text-maroon hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Link to="/blog" className="inline-block mt-4 text-xs font-semibold text-maroon underline">
        View all posts →
      </Link>
    </aside>
  );
};

export default RecentPosts;