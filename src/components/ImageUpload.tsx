import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { uploadImage } from '../lib/uploads';

interface Props {
  value: string;
  onChange: (url: string) => void;
  label: string;
  shape?: 'square' | 'round';
}

const ImageUpload = ({ value, onChange, label, shape = 'square' }: Props) => {
  const { token } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !token) return;

    setUploading(true);
    setError('');

    try {
      const url = await uploadImage(file, token);
      onChange(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div className="mb-4">
      <p className="text-sm font-semibold text-gray-700 mb-2">{label}</p>

      {value && (
        <img
          src={value}
          alt="Preview"
          className={`mb-3 object-cover border ${
            shape === 'round' ? 'w-28 h-28 rounded-full' : 'w-full max-h-56 rounded'
          }`}
        />
      )}

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="bg-white border px-4 py-2 rounded text-sm font-semibold disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : value ? 'Replace image' : 'Choose image'}
        </button>

        {value && !uploading && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="text-red-600 underline text-sm"
          >
            Remove
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />

      <p className="text-xs text-gray-400 mt-2">JPG or PNG, up to 5 MB.</p>
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default ImageUpload;