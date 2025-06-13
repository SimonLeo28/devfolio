import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactResponses() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchResponses() {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('http://localhost:3000/ContactResponses');
        if (!response.ok) {
          throw new Error('Failed to fetch responses');
        }
        const data = await response.json();
        setResponses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchResponses();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading responses...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Contact Form Responses</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {responses.length > 0 ? (
              responses.map((response) => (
                <tr key={response.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{response.name}</td>
                  <td className="py-3 px-4">
                    <a href={`mailto:${response.email}`} className="text-blue-600 hover:underline">
                      {response.email}
                    </a>
                  </td>
                  <td className="py-3 px-4">{response.message}</td>
                  <td className="py-3 px-4">
                    {new Date(response.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-center text-gray-500">
                  No responses found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button className='bg-black text-white p-3 hover:border-2 hover:border-black rounded-lg transition-all'><Link to="/">Back to Home Screen</Link></button>
      </div>
    </div>
  );
}