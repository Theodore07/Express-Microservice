import axios from "axios";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/user/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsers(response.data.data);
    } catch (error) {
      alert("Failed fetching user");
      console.log("Failed fetching all users: ", error);
    }
  };

  useEffect(() => {
    fetchUser();
  });
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-sm text-left text-gray-900 border border-gray-300">
        <thead className="bg-gray-100 text-xs uppercase">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Username</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Last Check In</th>
            <th className="px-4 py-2 border">Last Check Out</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{user.id}</td>
              <td className="px-4 py-2 border">{user.userName}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border capitalize">{user.role}</td>
              <td className="px-4 py-2 border">
                {user.lastCheckIn
                  ? new Date(user.lastCheckIn).toLocaleString()
                  : "-"}
              </td>
              <td className="px-4 py-2 border">
                {user.lastCheckOut
                  ? new Date(user.lastCheckOut).toLocaleString()
                  : "-"}
              </td>
              <td className="px-4 py-2 border">
                <span
                  className={`px-2 py-1 rounded text-white text-xs ${
                    user.isCheckedIn ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {user.isCheckedIn ? "Checked In" : "Checked Out"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
