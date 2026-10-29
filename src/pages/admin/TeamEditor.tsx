import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { createTeamMember, updateTeamMember, getTeamMembers } from '../../lib/team';
import ImageUpload from '../../components/ImageUpload';

const TeamEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);
  const { token } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [photo, setPhoto] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEditing || !id) return;

    getTeamMembers().then((members) => {
      const member = members.find((m) => m._id === id);
      if (member) {
        setName(member.name);
        setTitle(member.title);
        setBio(member.bio || '');
        setPhoto(member.photo || '');
      }
    });
  }, [isEditing, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) return;
    if (!name.trim() || !title.trim()) {
      setError('Name and title are required');
      return;
    }

    setSaving(true);
    setError('');

    try {
      if (isEditing && id) {
        await updateTeamMember(id, { name, title, bio, photo }, token);
      } else {
        await createTeamMember({ name, title, bio, photo }, token);
      }
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-maroon text-white px-8 py-4">
        <h1 className="font-serif text-xl font-bold">
          {isEditing ? 'Edit Team Member' : 'Add Team Member'}
        </h1>
      </header>

      <div className="px-8 py-6 max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="text"
            placeholder="Title (e.g. Senior Partner)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
          <textarea
            placeholder="Short bio (optional)"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="w-full border rounded px-4 py-2"
          />

          <ImageUpload
            label="Photo (optional)"
            value={photo}
            onChange={setPhoto}
            shape="round"
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-maroon text-white py-2 rounded font-semibold disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEditing ? 'Update' : 'Add Member'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamEditor;