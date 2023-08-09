import AddPatient from "../add patient/AddPatient"
import Navbar from "../navbar/Navbar"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deletePatient, getData } from "../../redux/actions"
import { useEffect } from "react"

const Patients = () => {

  const dispatch = useDispatch()
  const patients =  useSelector((state) => state.allPatients)
  const appointments = useSelector((user) => user.appointments)
  console.log(appointments)


  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patients"))
    dispatch(getData(storedPatients))
  }, [])
  
  const delPatient = (id) => {
    dispatch(deletePatient(id))
  }
 


  return (

    <>
      <Navbar />
      <div className="flex">
        <AddPatient />
        <div className="w-1/2 flex flex-col items-center pr-4 pt-10 h-screen overflow-y-auto gap-5">
          {patients && patients.length > 0 
          ? ( patients?.map((pat, id) => (
            <div className="bg-white w-[90%] h-[200px] rounded flex shadow-lg" key={id}>         
                <div className="w-1/4">
                  <img className="h-[200px] w-[210px] rounded" src={pat.file.base64} /> 
                </div>
                <div className="flex flex-col w-3/4">
                  <div className="flex w-full items-center justify-between px-2">
                      <p className="font-medium">{pat.name}</p>
                      <div className="flex gap-3">
                        <p className="font-medium">Age</p>
                        <p>{pat.age}</p>
                        <p>{(pat.gender === 'male')
                          ? <span className="material-symbols-outlined" style={{color:'blue'}}>male</span>
                          : <span class="material-symbols-outlined" style={{color:'pink'}}>female</span>
                        }</p>
                      </div>
                  </div>
                  <div className="flex flex-col items-center justify-evenly w-full h-full">
                    <div className="w-full px-2 h-2/3">
                      <p>{pat.symptoms}</p>
                    </div>                   
                    <div className="flex text-white gap-5 w-full h-1/3">
                      <div className="w-2/3 px-2 flex items-center justify-start gap-4">
                        <span class="material-symbols-outlined" style={{color:'green'}}>calendar_today</span>
                        {appointments && appointments.some(date => date.name === pat.name) ? (
                        appointments
                          .filter(date => date.name === pat.name)
                          .map((date, idx) => <p key={idx} className="text-black">{date.date}</p>)
                        ) : (
                          <p className="text-black">no appointments for this patient</p>
                        )}
                      </div>
                      <div className="flex gap-4 w-1/3 items-center justify-end px-4">
                        <button className="bg-blue-600 w-[30px] h-[30px] rounded cursor-pointer flex items-center justify-center">
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button className="bg-red-600 w-[30px] h-[30px] py-2 rounded cursor-pointer flex items-center justify-center" onClick={() => delPatient(id)}>
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </div>
                </div>

                </div>
            </div>
          ))) 
          : (
            <div className="flex flex-col w-full h-screen items-center justify-center">
              <p className="text-2xl font-bold text-[#6D6AFE]">No patients on your list</p>
              <p className="italic font-medium1">add your patients</p>
            </div>
              )}
        </div>
      </div>
    </>
    

  );
};
export default Patients