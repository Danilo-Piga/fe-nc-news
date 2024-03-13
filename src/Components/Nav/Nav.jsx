import { Link } from "react-router-dom";
import { UserContext } from "../userContext";
import { useContext } from "react";
import "./Nav.css";
import Logo from "../../assets/logo.png";

function Nav() {
  const { currentUser } = useContext(UserContext);
  return (
    <nav className="nav">
      <Link to="/">
        <img src={Logo} className="nav-logo" />
      </Link>
      <Link to="/topics" className="nav-link">
        Topics
      </Link>
      <section className="profile">
        Current user:{" "}
        <Link to="/users" className="profile-link">
          {currentUser.username}
        </Link>{" "}
      </section>
      <Link to="/users" className="nav-user-link">
        <img
          src={currentUser.avatar_url}
          className="nav-user-icon"
          alt={currentUser.username}
          style={{ width: 40, height: 40 }}
        />
      </Link>
    </nav>
  );
}

export default Nav;
