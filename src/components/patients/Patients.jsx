import AddPatient from "../add patient/AddPatient"
import Navbar from "../navbar/Navbar"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deletePatient, getData } from "../../redux/actions"
import { useEffect } from "react"

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

    <>
      <Navbar />
      <div className="flex">
        <AddPatient />
        <div className="w-1/2 flex flex-col items-center p-4 h-screen overflow-y-auto">
          {patients && patients.length > 0 
          ? ( patients?.map((pat, id) => (
            <div className="bg-gray-600 w-[80%] rounded" key={id}>
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
          : (
            <div className="flex flex-col w-full h-screen items-center justify-center">
              <p className="text-2xl font-bold text-[#6D6AFE]">No patients on your list</p>
              <p className="italic font-medium">add your patients</p>
            </div>
              )}
        </div>
      </div>
    </>
    

  );
};
export default Patients