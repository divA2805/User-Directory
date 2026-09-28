import { useState } from "react";
import type { User } from "../types/user";
interface UserFormProps {
  initialUser?: User;
  onSubmit: (name: string, email: string) => Promise<void>;
  buttonText: string;
}
const UserForm = ({ initialUser, onSubmit, buttonText }: UserFormProps) => {
  const [name, setName] = useState(initialUser?.name || "");
  const [email, setEmail] = useState(initialUser?.email || "");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }
    await onSubmit(name, email);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>{buttonText}</h2>
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default UserForm;
