import type { User } from "../types/user";
import UserCard from "./UserCard";
interface UserListProp {
  user: User[];
  onDelete: (id: number) => void;
}
const UserList = ({ user, onDelete }: UserListProp) => {
  return (
    <div>
      {user.map((item) => (
        <UserCard key={item.id} user={item} onDelete={onDelete} />
      ))}
    </div>
  );
};
export default UserList;
