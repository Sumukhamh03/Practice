"use client";

import { cache, useState, useEffect } from "react";

// Cache API response
const fetchUser = cache(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  return response.json();
});

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [cachedAt, setCachedAt] = useState(null);
  const [freshData, setFreshData] = useState(null);
  const [freshAt, setFreshAt] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const data = await fetchUser();
      setUser(data);
      setCachedAt(new Date().toLocaleTimeString());
    }
    loadUser();
  }, []);

  const fetchFreshData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    setFreshData(data);
    setFreshAt(new Date().toLocaleTimeString());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-md w-full p-6 bg-white shadow-2xl rounded-2xl border">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Avatar"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
            <p className="text-gray-500">{user ? user.username : "Loading..."}</p>
          </div>
        </div>

        {user && (
          <div className="mt-4 text-gray-700">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Location:</strong> San Francisco, CA</p>
            <p>
              <strong>Website:</strong> 
              <a href="https://johndoe.dev" className="text-blue-500 underline"> johndoe.dev</a>
            </p>
            <p className="text-sm text-gray-500">Cached at: {cachedAt}</p>
          </div>
        )}

        {freshData && (
          <div className="mt-6 p-4 border-t">
            <h3 className="text-lg font-semibold text-gray-800">Fresh Data</h3>
            <p><strong>Name:</strong> {freshData.name}</p>
            <p><strong>Email:</strong> {freshData.email}</p>
            <p className="text-sm text-gray-500">Fetched at: {freshAt}</p>
          </div>
        )}

        <button
          className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={fetchFreshData}
        >
          Fetch Fresh Data
        </button>
      </div>
    </div>
  );
}
