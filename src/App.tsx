import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import type { User } from "./types/user";
import Header from "./components/Header";
import { deleteUser, getUser } from "./services/userService";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        const parsedUsers: User[] = JSON.parse(storedUsers);
        setUsers(parsedUsers);
        console.log("Users loaded from localStorage");
        return;
      }
      const data = await getUser();
      setUsers(data);
      localStorage.setItem("users", JSON.stringify(data));
      console.log("Users loaded from API");
    } catch (error) {
      console.error(error);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    } catch (error) {
      console.error(error);
      alert("Failed to delete user");
    }
  };

  const handleAddUser = (newUser: User) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleUpdateUser = (updatedUser: User) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user,
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/users"element={<Users users={users} loading={loading} error={error} onDelete={handleDelete} />}/>
        <Route path="/users/add" element={<AddUser onUserAdd={handleAddUser} />}/>
        <Route path="/users/edit/:id" element={<EditUser users={users} onUserUpdate={handleUpdateUser}/>}/>
        <Route path="*" element={<Navigate to="/users" replace />} />
      </Routes>
    </>
  );
};

export default App;
