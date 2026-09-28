import { useNavigate } from "react-router-dom";
import type { User } from "../types/user";
interface UserCardProp {
  user: User;
  onDelete: (id: number) => void;
}
const UserCard = ({ user, onDelete }: UserCardProp) => {
  const navigate = useNavigate();
  return (
    <div className="user-card">
      <p>
        <strong>{user.name}</strong>
      </p>
      <p>{user.email}</p>
      <button onClick={() => onDelete(user.id)}>🗑️</button>
      <button onClick={() => navigate(`/users/edit/${user.id}`)}>📝</button>
      <hr />
    </div>
  );
};

export default UserCard;
