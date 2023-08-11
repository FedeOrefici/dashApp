import { useSelector } from "react-redux"
import Navbar from "../navbar/Navbar"
import Chats from "./Chats"
import Conversations from "./Conversations"
import { useState } from "react"
const Messages = () => {

  const patients = useSelector((state) => state.allPatients)
  const [emailSelected, setEmailSelected] = useState('')
  
  const handlePatientClick = (email) => {
    setEmailSelected(email)
  }

  return (
    <div>
        <Navbar />
        <div className="flex w-full">
          <div className="w-1/4 bg-slate-300 h-screen p-2">
            <div className="h-screen p-2 flex flex-col justify-around">
              <div className="h-1/2 flex flex-col gap-2 py-2">
                <Chats patients={patients} handlePatientClick={handlePatientClick} />
              </div>
              <div style={{color:'#6D6AFE'}} className="flex justify-center">
                <span class="material-symbols-outlined">medication</span>
              </div>
            </div>
          </div>
          <div className="w-3/4 h-screen">
            <Conversations patients={patients} emailSelected={emailSelected} />
          </div>
        </div>
    </div>
  )
}

export default Messages