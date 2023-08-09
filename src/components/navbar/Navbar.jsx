import { NavLink } from "react-router-dom"
import profile from '../../assets/doc.jpg'



const Navbar = () => {
  return ( 
   
      <div className="flex bg-gray-50 items-center justify-around h-[90px]">

        <div className="text-[#6D6AFE] py-2 flex items-center justify-center">
          <span class="material-symbols-outlined">medication</span>
        </div>

        <div className="flex w-1/2 items-center justify-around py-2">
          <NavLink style={{textDecoration:'none'}} to="/patients"><p>patients</p></NavLink>
          <NavLink style={{textDecoration:'none'}} to="/appointments"><p>appointments</p></NavLink>
          <NavLink style={{textDecoration:'none'}} to="/messages"><p>messages</p></NavLink>
        </div>
     
      
        <div className="cursor-pointer gap-5 border py-2 flex items-center justify-center w-[300px] bg-[#6D6AFE] rounded text-white">
          <p>Dr. Doctor</p>
          <img className="w-[40px] h-[40px] rounded-full" src={profile} />
        </div>
      

      </div>
    
  )
}

export default Navbar