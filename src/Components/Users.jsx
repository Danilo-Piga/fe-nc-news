import { useState, useContext, useEffect } from "react";
import { fetchUsers } from "../Utils/api";
import { UserContext } from "./userContext";
import './UserIcon.css'

function Users() {

    const {setCurrentUser} = useContext(UserContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers().then(({users}) => {
            setUsers(users)
        })
    }, [])

    return (
        <main>
            <ul className="users">
        {users.map((user) => {
            return <li key={user.username}>
                <h2>{user.username}</h2>
                <img src={user.avatar_url} className="user-icon"style={{ width: 170, height: 170 }}/>
                <p className="">{user.kudos}</p>
                <button onClick={()=>{setCurrentUser(user)}}>Select Profile</button>
                </li>
        })}
    </ul>
        </main>
    )
}

export default Users