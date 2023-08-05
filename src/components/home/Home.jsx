import Navbar from "../navbar/Navbar"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, CartesianGrid } from "recharts"

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 800 },
  { name: 'Group E', value: 100 }
]

const Home = () => {

  console.log();


  return (
    <div>
        <Navbar />
        <p>home</p>
        <div style={{width:'100%', height:'400px'}}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
              dataKey="value"
              data={data}
              >
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
    </div>
  )
}

export default Home