import { useNavigate, useParams } from "react-router-dom";
import type { User } from "../types/user";
import UserForm from "../components/UserForm";
import { updateUser } from "../services/userService";
interface EditUserProps {
  users: User[];
  onUserUpdate: (user: User) => void;
}
const EditUser = ({ users, onUserUpdate }: EditUserProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedUser = users.find((user) => user.id === Number(id));
  if (!selectedUser) {
    return (
      <div className="container">
        <h2>User not found</h2>
        <button onClick={() => navigate("/users")}>Back to Users</button>
      </div>
    );
  }
  const handleUpdate = async (name: string, email: string) => {
    try {
      const updatedUser = await updateUser(selectedUser.id, {
        name,
        email,
      });
      onUserUpdate(updatedUser);
      alert("User updated successfully");
      navigate("/users");
    } catch (error) {
      console.error(error);
      alert("Failed to update user");
    }
  };

  return (
    <div className="container">
      <UserForm initialUser={selectedUser} onSubmit={handleUpdate} buttonText="Update User"/>
      <button onClick={() => navigate("/users")}>Cancel</button>
    </div>
  );
};

export default EditUser;
