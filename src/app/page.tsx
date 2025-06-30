'use client';
import { useState , useCallback} from 'react';
import axios from 'axios';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setStatus('File selected: ' + selectedFile.name);
    } else {
      setFile(null);
      setStatus('No file selected.');
    }
  }, []);

  const handleUpload = useCallback( async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setStatus('Please select a file to upload.');
      return;
    }
    setIsUploading(true);
    setStatus('Uploading...');
    try {
      const formData = new FormData();
      formData.append('image', file);
      const response = await axios.post('http://127.0.0.1:5000/upload', formData);
     // console.log(response.data);
      setImageUrl(response.data.image_url);
      setStatus('Upload successful!');
    } catch (error:any) {
      setStatus(`Upload failed: ${error.response?.data?.message || error.message}`);
      setStatus('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, [file]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">📦 PixelDrop</h1>
      <form className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-md" onSubmit={handleUpload}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input w-full"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          disabled={isUploading || !file}
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
        <p className="text-center text-sm text-gray-600">{status}</p>
      </form>
      {imageUrl && (
        <div className="mt-6">
          <p className="text-sm mb-2 text-gray-700">Preview:</p>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="max-w-xs rounded shadow"
            loading="lazy"
            onError={() => setStatus('Failed to load image.')}
          />
        </div>
      )}
    </main>
  )
};