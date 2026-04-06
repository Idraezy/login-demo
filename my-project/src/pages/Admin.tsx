import { useEffect, useState } from "react";

interface User {
  email: string;
  characters: string;
  time: string;
}

const Admin = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(data);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {users.length === 0 ? (
        <p>No data yet</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Characters</th>
              <th className="p-2 border">Time</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.characters}</td>
                <td className="p-2 border">
                  {new Date(user.time).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={() => {
          localStorage.removeItem("users");
          window.location.reload();
        }}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Clear Data
      </button>
    </div>
  );
};

export default Admin;