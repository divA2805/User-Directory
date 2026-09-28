import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-bar">
      <Link to="/users" className="logo"> User Management </Link>
      <div>Admin</div>
    </div>
  );
};

export default Header;