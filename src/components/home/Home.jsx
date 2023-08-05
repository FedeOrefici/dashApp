import { useSelector } from "react-redux"
import Navbar from "../navbar/Navbar"


const Home = () => {

  const allPatients = useSelector((state) => state.allPatients)


  // const genderData = allPatients.reduce((acc, patient) => {
  //   if(!acc[patient.gender]){
  //     acc[patient.gender] = 0
  //   }
  //   acc[patient.gender]++
  //   return acc;
  // }, {})

  
 
  return (
    <div>
        <Navbar />
        <p>home</p>
       <p>welcome</p>
        
    </div>
  )
}

export default Home