import AddPatient from "../add patient/AddPatient"
import Navbar from "../navbar/Navbar"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deletePatient, getData } from "../../redux/actions"
import { useEffect } from "react"
import { RadialBarChart, Legend, Tooltip, RadialBar } from "recharts"

const Patients = () => {

  const dispatch = useDispatch()
  const patients =  useSelector((state) => state.allPatients)

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patients"))
    dispatch(getData(storedPatients))
  }, [])
  
  const delPatient = (id) => {
    dispatch(deletePatient(id))
  }

  return (

    <div>
      <Navbar />
        <div>
          {patients && patients.length > 0 
          ? ( patients?.map((pat, id) => (
            <div key={id}>
              <div>
                <div>
                  <p>Name</p>
                  <p>{pat.name}</p>
                </div>
                <div>
                  <p>Age</p>
                  <p>{pat.age}</p>
                </div>
                <div>
                  <p>gender</p>
                  <p>{pat.gender}</p>
                </div>
                <div>
                  <p>Symptoms</p>
                  <p>{pat.symptoms}</p>
                </div>
                <button>Edit</button>
                <button onClick={() => delPatient(id)}>Delete</button>
              </div>
            </div>
          ))) 
          : (<p>no patients on your list</p>)}
        </div>
      <AddPatient />
      <div style={{width:'100%', height:'400px'}}>
        <RadialBarChart 
        width={730} 
        height={250} 
        innerRadius="10%" 
        outerRadius="80%" 
        data={patients} 
        startAngle={180} 
        endAngle={0}
      >
        <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
        <Tooltip />
      </RadialBarChart>
        </div>
    </div>
    

  );
};
export default Patients