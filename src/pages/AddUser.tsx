import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { createUser } from "../services/userService";
import type { User } from "../types/user";
interface AddUserProps {
  onUserAdd: (user: User) => void;
}
const AddUser = ({ onUserAdd }: AddUserProps) => {
  const navigate = useNavigate();
  const handleAdd = async (name: string, email: string) => {
    try {
      const newUser = await createUser({
        name,
        email,
      });
      onUserAdd(newUser);
      alert("User created successfully");
      navigate("/users");
    } catch (error) {
      console.error(error);
      alert("Failed to create user");
    }
  };
  return (
    <div className="container">
      <UserForm onSubmit={handleAdd} buttonText="Add User" />
      <button onClick={() => navigate("/users")}>Cancel</button>
    </div>
  );
};
export default AddUser;
