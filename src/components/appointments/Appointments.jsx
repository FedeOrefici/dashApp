import Navbar from "../navbar/Navbar"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAppointments } from "../../redux/actions"
import validationAppointments from "./validations"
import { deleteAppointment } from "../../redux/actions"

const Appointments = () => {

  const patients = useSelector((state) => state.allPatients)
  const appointData = useSelector((state) => state.appointments)
  const dispatch = useDispatch()
  const [showData, setShowData] = useState(false)


  const [appointment, setappointment] = useState({
    name: '',
    date: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    date: ''
  })

  const handleEvent = (event) => {
    setappointment({
      ...appointment,
      [event.target.name]: event.target.value
    })
    setErrors(validationAppointments({
      ...appointment,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const erorrs = validationAppointments(appointment)
    if(Object.keys(erorrs).length > 0){
      return null;
    } else {
      setShowData(true)
      dispatch(addAppointments(appointment))
      setappointment({
        name: '',
        date: ''
      })
    }
  }

  useEffect(() => {
    if(showData){
      let timeOut = setTimeout(() => {setShowData(false)}, 2000)
      return () => clearTimeout(timeOut)
    }
  }, [showData])

  const handleDelete = (id) => {
    dispatch(deleteAppointment(id))
  }


  return (
    <div>
    <Navbar />
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <div>
            <p>Insert a patient</p>
            <select name="name" value={appointment.name} onChange={handleEvent}>
                <option selected>Select a patient</option>
              {patients.map(pat =>
                <option>{pat.name}</option>
              )}
            </select>
            {errors && <p>{errors.name}</p>}
          </div>
          <div>
            <p>Select a date</p>
            <input name="date" value={appointment.date} onChange={handleEvent} type="date" />
            {errors && <p>{errors.date}</p>}
          </div>
          <button type="submit">confirm</button>
        </div>
      </div>
    </form>
    {showData && (
      <p w='300px' justifyContent="center" status='success'><AlertIcon />Appointment created</p>
    )}
    
      
            {appointData && appointData.length > 0 ? (
              appointData.map((app, id) => (
          <table>
      
              <thead>
                <tr>
                  <th>name</th>
                  <th>date</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>{app.name}</td>
                <td>{app.date}</td>
                <td>
                  <button onClick={() => handleDelete(id)}>delete</button>
                  <button>edit</button>
                </td>
              </tr>
              </tbody>
          
          </table>
              ))
            ) : ( <p>No appointments on your list</p> )}

    </div>
  )
}

export default Appointments