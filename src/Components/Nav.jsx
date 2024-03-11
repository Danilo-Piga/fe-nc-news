import { Link } from "react-router-dom"
import { UserContext } from "./userContext"
import { useContext } from "react"
import './Nav.css'

function Nav () {

    const {currentUser} = useContext(UserContext)
  return (
    <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <section className="profile">
				Current user: <Link to="/users">{currentUser.username}</Link>{' '}
			</section>
        <Link to="/users"><img src={currentUser.avatar_url} className="nav-user-icon"alt={currentUser.username} style={{ width: 80, height: 80 }}/></Link>
         
    </nav>
  )
}
 
export default Nav
