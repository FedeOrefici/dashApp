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
        <div className="flex w-3/4 mx-auto">
          <div className="w-2/4 bg-slate-300 h-[800px]">
            <div className="h-[800px] flex flex-col justify-around">
              <div className="h-1/2 flex flex-col py-2">
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