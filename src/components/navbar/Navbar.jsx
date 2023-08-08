import { NavLink } from "react-router-dom"
import profile from '../../assets/doc.jpg'

const Navbar = () => {
  return (
    <>
    <div>
      <div>
        <img src={profile} />
        <p>Dr. Doctor</p>
      </div>
      <div>
        <NavLink to="/patients"><p>patients</p></NavLink>
        <NavLink to="/appointments"><p>appointments</p></NavLink>
        <NavLink to="/messages"><p>messages</p></NavLink>
        <NavLink to="/"><p>logout</p></NavLink>
      </div>
    </div>
  </>
  )
}

export default Navbar