import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <ul>
            <NavLink to="/home">home</NavLink>
            <NavLink to="/patients">patients</NavLink>
            <NavLink to="/appointments">appointments</NavLink>
            <NavLink to="/messages">messages</NavLink>
            <NavLink to="/">logout</NavLink>
        </ul>
    </div>
  )
}

export default Navbar