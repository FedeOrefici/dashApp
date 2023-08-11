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
    <>
    <Navbar />
    <div className="flex w-full">
      <form className="w-2/5 bg-slate-100 shadow-lg h-screen flex flex-col items-center justify-around min-w-1/4" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col px-4">
          <div className="w-full h-full flex items-center justify-center flex-col">
            <div className="w-2/3 mx-auto h-[120px] flex justify-center flex-col">
              <p className="text-[11px] text-gray-500">Insert a patient</p>
              <select className="p-2" name="name" value={appointment.name} onChange={handleEvent}>
                  <option selected>Select a patient</option>
                {patients && patients.map(pat =>
                  <option>{pat.name}</option>
                )}
              </select>
              {errors && <p className="h-[30px] text-red-600 py-2">{errors.name}</p>}
            </div>
            <div className="flex h-[120px] flex-col justify-center w-2/3 mx-auto">
              <p className="text-[11px] text-gray-500">Select a date</p>
              <input className="p-2" name="date" value={appointment.date} onChange={handleEvent} type="date" />
              {errors && <p className="h-[30px] text-red-600 py-2">{errors.date}</p>}
            </div>
            <div className="flex items-center justify-center w-full">
              <button className="bg-[#6D6AFE] w-2/3 hover:bg-[#4C49BB] py-2 rounded text-white shadow-lg" type="submit">confirm</button>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <p>add a new</p>
          <span className="text-[#6D6AFE] italic font-bold">appointment</span>
        </div>
        {showData && (
          <p className="bg-green-600 py-2 w-[200px] rounded text-white absolute bottom-[300px] text-center">Appointment created</p>
        )}
      </form>


      <div className="w-full flex flex-col gap-2 max-h-screen overflow-y-auto p-4">  
        {appointData && appointData.length > 0 ? (
          appointData.map((app, id) => (
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex w-2/4 rounded shadow-md gap-10 p-2 items-center justify-center bg-slate-100 h-[100px]">
                      <p>{app.name}</p>
                      <p>{app.date}</p>
                      <div className="flex ">
                        <button className="bg-red-600 py-2 w-[100px] rounded text-white hover:bg-red-700" onClick={() => handleDelete(id)}>delete</button>
                      </div>
                    </div>
                  </div>
                  ))
                ) : ( 
                <div className="flex flex-col mx-auto items-center justify-center">
                  <p className="text-2xl font-bold text-[#6D6AFE]">No appointments on your list</p>
                  <p className="italic font-medium1">add your appointments</p>
                </div>
              )}
      </div>

    </div>
    </>
  )
}

export default Appointments