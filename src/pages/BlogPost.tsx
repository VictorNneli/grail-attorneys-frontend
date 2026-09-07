import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPublishedPostBySlug } from '../lib/posts';
import type { Post } from '../types';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    if (!slug) return;

    getPublishedPostBySlug(slug)
      .then((data) => {
        setPost(data);
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }, [slug]);

  if (status === 'loading') {
    return <p className="text-center py-16 text-gray-500">Loading...</p>;
  }

  if (status === 'error' || !post) {
    return (
      <div className="text-center py-16">
        <p className="text-red-600 mb-4">Post not found.</p>
        <Link to="/blog" className="text-maroon underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="px-8 py-16 max-w-2xl mx-auto">
      {post.coverImage && (
        <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover rounded mb-8" />
      )}
      <h1 className="font-serif text-3xl font-bold text-maroon mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-8">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="prose text-gray-700" dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  );
};

export default BlogPost;