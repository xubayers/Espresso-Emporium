import { FaEdit, FaTrash } from "react-icons/fa";

const UsersTable = () => {
  // Sample data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      gender: "Male",
      status: "Active",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-200">User Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black/50 border border-gray-700">
          <thead>
            <tr className="bg-gray-600 text-gray-200 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Gender</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-500 text-gray-300 hover:bg-gray-900"
              >
                <td className="py-3 px-6 text-left">{user.id}</td>
                <td className="py-3 px-6 text-left">{user.name}</td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-left">{user.gender}</td>
                <td className="py-3 px-6 text-left">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      user.status === "Active"
                        ? "bg-green-200 text-green-600"
                        : "bg-red-200 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center space-x-4 text-xl">
                    {/* Edit Icon */}
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    {/* Delete Icon */}
                    <button
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
