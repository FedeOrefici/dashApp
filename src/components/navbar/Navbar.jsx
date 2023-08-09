import { NavLink } from "react-router-dom"
import profile from '../../assets/doc.jpg'



const Navbar = () => {
  return ( 
    <div >
      <div >
        <div >
          <span class="material-symbols-outlined">medication</span>
        </div>
        <NavLink style={{textDecoration:'none'}} to="/patients"><p>patients</p></NavLink>
        <NavLink style={{textDecoration:'none'}} to="/appointments"><p>appointments</p></NavLink>
        <NavLink style={{textDecoration:'none'}} to="/messages"><p>messages</p></NavLink>
      </div>
      <div >
        <div >
          <p>Dr. Doctor</p>
          <img style={{width:'30px', height:'50px'}} src={profile} />
        </div>
      </div>
    </div>
  )
}

export default Navbar