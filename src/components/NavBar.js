import './NavBar.css'
import {Link} from "react-router-dom";

/**
 * Primary navigation bar of the website.
 */
const NavBar = () => {
  return <nav>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/projects"}>Projects</Link></li>
        <li><Link to={"/work-history"}>Work History</Link></li>
        <li><Link>Download Resume</Link></li>
      </ul>
    </nav>
}

export default NavBar;