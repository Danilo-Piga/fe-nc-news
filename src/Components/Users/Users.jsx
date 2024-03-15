import { useState, useContext, useEffect } from "react";
import { fetchUsers } from "../../Utils/api";
import { UserContext } from "../userContext";
import "./UserIcon.css";

function Users() {
  const { setCurrentUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <main>
      <ul className="users-list">
        {users.map((user) => {
          return (
            <li key={user.username} className="user-card">
              <img
                src={user.avatar_url}
                alt={user.username}
                className="user-icon"
              />
              <div className="user-info">
                <h2 className="user-name">{user.username}</h2>
                <p className="user-kudos">Kudos: {user.kudos}</p>
              </div>
              <button
                onClick={() => {
                  setCurrentUser(user);
                }}
                className="select-profile-btn"
              >
                Select Profile
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Users;
