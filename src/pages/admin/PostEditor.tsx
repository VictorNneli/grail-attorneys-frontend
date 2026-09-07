import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useAuth } from '../../context/AuthContext';
import { createPost, updatePost, getPostByIdAdmin } from '../../lib/posts';

const PostEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);
  const { token } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
  });

  useEffect(() => {
    if (!isEditing || !id || !token || !editor) return;

    getPostByIdAdmin(id, token).then((post) => {
      setTitle(post.title);
      setCoverImage(post.coverImage || '');
      setStatus(post.status);
      editor.commands.setContent(post.body);
    });
  }, [isEditing, id, token, editor]);

  const handleSave = async (publishStatus: 'draft' | 'published') => {
    if (!token || !editor) return;

    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    setSaving(true);
    setError('');

    const body = editor.getHTML();

    try {
      if (isEditing && id) {
        await updatePost(id, { title, body, coverImage, status: publishStatus }, token);
      } else {
        await createPost({ title, body, coverImage, status: publishStatus }, token);
      }
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-maroon text-white px-8 py-4">
        <h1 className="font-serif text-xl font-bold">
          {isEditing ? 'Edit Post' : 'New Post'}
        </h1>
      </header>

      <div className="px-8 py-6 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-4 text-xl font-serif"
        />

        <input
          type="text"
          placeholder="Cover image URL (optional, for now)"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-4 text-sm"
        />

        {/* Toolbar */}
        <div className="flex gap-2 mb-2 border rounded p-2 bg-white">
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className={`px-2 py-1 rounded ${editor?.isActive('bold') ? 'bg-maroon text-white' : 'bg-gray-100'}`}
          >
            Bold
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className={`px-2 py-1 rounded ${editor?.isActive('italic') ? 'bg-maroon text-white' : 'bg-gray-100'}`}
          >
            Italic
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`px-2 py-1 rounded ${editor?.isActive('heading', { level: 2 }) ? 'bg-maroon text-white' : 'bg-gray-100'}`}
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            className={`px-2 py-1 rounded ${editor?.isActive('bulletList') ? 'bg-maroon text-white' : 'bg-gray-100'}`}
          >
            Bullet List
          </button>
        </div>

        {/* Editor content area */}
        <div className="border rounded bg-white p-4 min-h-[300px] mb-4">
          <EditorContent editor={editor} />
        </div>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button
            onClick={() => handleSave('draft')}
            disabled={saving}
            className="bg-gray-200 px-4 py-2 rounded font-semibold disabled:opacity-50"
          >
            Save as Draft
          </button>
          <button
            onClick={() => handleSave('published')}
            disabled={saving}
            className="bg-maroon text-white px-4 py-2 rounded font-semibold disabled:opacity-50"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;