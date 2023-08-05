import { useSelector } from "react-redux"
import Navbar from "../navbar/Navbar"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, CartesianGrid } from "recharts"

const Home = () => {

  const allPatients = useSelector((state) => state.allPatients)
  console.log(allPatients);
  

  
 
  return (
    <div>
        <Navbar />
        <p>home</p>
        <div style={{width:'100%', height:'400px'}}>
          <ResponsiveContainer>
          <PieChart width={730} height={250}>
          <Pie
              data={allPatients}
              dataKey="age"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
          </PieChart>
          </ResponsiveContainer>
        </div>
        
    </div>
  )
}

export default Home