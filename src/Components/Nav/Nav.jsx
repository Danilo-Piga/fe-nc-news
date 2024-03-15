import { Link } from "react-router-dom";
import { UserContext } from "../userContext";
import { useContext } from "react";
import "./Nav.css";
import Logo from "../../assets/logo.png";
import Icon from "../../assets/Icon.jpg";

function Nav() {
  const { currentUser } = useContext(UserContext);
  return (
    <nav className="nav">
      <Link to="/">
        <img
          src={Logo}
          alt="Silhouette of Reddit icon, as the home button"
          className="nav-logo"
        />
      </Link>
      <Link to="/topics" className="nav-link">
        Topics
      </Link>
      <section className="profile">
        <img src={Icon} alt="Silhouette of user icon" />{" "}
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
