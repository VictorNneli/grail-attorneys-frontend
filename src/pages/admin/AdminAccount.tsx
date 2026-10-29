import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { updateAccount } from '../../lib/auth';

const AdminAccount = () => {
  const { token, user, logout } = useAuth();
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    setError('');

    if (!newEmail.trim() && !newPassword) {
      setError('Enter a new email, a new password, or both');
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      setError('The new passwords do not match');
      return;
    }

    setSaving(true);

    try {
      await updateAccount(
        {
          currentPassword,
          newEmail: newEmail.trim() || undefined,
          newPassword: newPassword || undefined
        },
        token
      );
      setSuccess('Account updated. Please log in again with your new details.');
      setTimeout(() => {
        logout();
        navigate('/admin/login');
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update account');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-maroon text-white px-8 py-4 flex justify-between items-center">
        <h1 className="font-serif text-xl font-bold">Account Settings</h1>
        <Link to="/admin/dashboard" className="text-sm underline">
          Back to dashboard
        </Link>
      </header>

      <div className="px-8 py-6 max-w-xl mx-auto">
        <p className="text-sm text-gray-600 mb-6">
          Logged in as <span className="font-semibold">{user?.email}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Current password (required)"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            className="w-full border rounded px-4 py-2"
          />

          <input
            type="email"
            placeholder="New email (leave empty to keep the current one)"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />

          <input
            type="password"
            placeholder="New password (leave empty to keep the current one)"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />

          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />

          <p className="text-xs text-gray-400">New passwords need at least 8 characters.</p>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-700 text-sm">{success}</p>}

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-maroon text-white py-2 rounded font-semibold disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Update account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAccount;