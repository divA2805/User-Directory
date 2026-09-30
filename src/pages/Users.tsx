// import { useNavigate } from "react-router-dom";
// import type { User } from "../types/user";
// import UserList from "../components/UserList";

// interface UsersProps {
//   users: User[];
//   loading: boolean;
//   error: string;
//   onDelete: (id: number) => void;
// }

// const Users = ({ users, loading, error, onDelete }: UsersProps) => {
//   const navigate = useNavigate();

//   return (
//     <div className="container">
//       <div className="page-header">
//         <h2>Users</h2>
//         <button onClick={() => navigate("/users/add")}>+ Add User</button>
//       </div>
//       {loading ? (
//         <p>Loading users...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : users.length === 0 ? (
//         <p>No user found</p>
//       ) : (
//         <UserList user={users} onDelete={onDelete} />
//       )}
//     </div>
//   );
// };

// export default Users;

import { useState } from "react";
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
  const [search, setSearch] = useState("");

  // Filter users
  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase().trim();
    return (
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="container">
      <div className="page-header">
        <h2>Users</h2>
        <button onClick={() => navigate("/users/add")}>+ Add User</button>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {loading && <p>Loading users...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && users.length === 0 && <p>No users found</p>}
      {!loading && !error && users.length > 0 && (
        <>
          {filteredUsers.length > 0 ? (
            <UserList user={filteredUsers} onDelete={onDelete} />
          ) : (<p>No users match "{search}"</p>)}
        </>
      )}
    </div>
  );
};

export default Users;
