import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getAllPostsAdmin, deletePost } from '../../lib/posts';
import { getAllMessages } from '../../lib/messages';
import type { Post } from '../../types';
import type { Message } from '../../lib/messages';

const AdminDashboard = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [tab, setTab] = useState<'posts' | 'messages'>('posts');

  useEffect(() => {
    if (!token) return;
    getAllPostsAdmin(token).then(setPosts).catch(console.error);
    getAllMessages(token).then(setMessages).catch(console.error);
  }, [token]);

  const handleDelete = async (id: string) => {
    if (!token) return;
    if (!confirm('Delete this post?')) return;

    await deletePost(id, token);
    setPosts(posts.filter((p) => p._id !== id));
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const unreadCount = messages.filter((m) => m.status === 'new').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-maroon text-white px-8 py-4 flex justify-between items-center">
        <h1 className="font-serif text-xl font-bold">Grail Attorneys Admin</h1>
        <button onClick={handleLogout} className="text-sm underline">
          Log Out
        </button>
      </header>

      <div className="px-8 py-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTab('posts')}
            className={`px-4 py-2 rounded ${tab === 'posts' ? 'bg-maroon text-white' : 'bg-white border'}`}
          >
            Blog Posts
          </button>
          <button
            onClick={() => setTab('messages')}
            className={`px-4 py-2 rounded ${tab === 'messages' ? 'bg-maroon text-white' : 'bg-white border'}`}
          >
            Messages {unreadCount > 0 && `(${unreadCount} new)`}
          </button>
        </div>

        {tab === 'posts' && (
          <div>
            <Link
              to="/admin/posts/new"
              className="inline-block mb-4 bg-maroon text-white px-4 py-2 rounded font-semibold"
            >
              + New Post
            </Link>
            <div className="bg-white rounded shadow divide-y">
              {posts.length === 0 && <p className="p-4 text-gray-500">No posts yet.</p>}
              {posts.map((post) => (
                <div key={post._id} className="p-4 flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{post.title}</p>
                    <p className="text-xs text-gray-400">{post.status}</p>
                  </div>
                  <div className="flex gap-3">
                    <Link to={`/admin/posts/${post._id}/edit`} className="text-maroon underline text-sm">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="text-red-600 underline text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'messages' && (
          <div className="bg-white rounded shadow divide-y">
            {messages.length === 0 && <p className="p-4 text-gray-500">No messages yet.</p>}
            {messages.map((msg) => (
              <div key={msg._id} className="p-4">
                <div className="flex justify-between">
                  <p className="font-semibold">{msg.name} — {msg.subject}</p>
                  <span className="text-xs uppercase text-gray-400">{msg.status}</span>
                </div>
                <p className="text-sm text-gray-600">{msg.email}{msg.phone ? ` · ${msg.phone}` : ''}</p>
                <p className="text-sm text-gray-700 mt-1">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;