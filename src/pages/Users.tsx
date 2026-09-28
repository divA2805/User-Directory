import { useNavigate } from "react-router-dom";
import type { User } from "../types/user";
import UserList from "../components/UserList";

interface UsersProps {
  users: User[];
  loading: boolean;
  error: string;
  onDelete: (id: number) => void;
}

const Users = ({ users, loading, error, onDelete }: UsersProps) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="page-header">
        <h2>Users</h2>
        <button onClick={() => navigate("/users/add")}>+ Add User</button>
      </div>
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>{error}</p>
      ) : users.length === 0 ? (
        <p>No user found</p>
      ) : (
        <UserList user={users} onDelete={onDelete} />
      )}
    </div>
  );
};

export default Users;
