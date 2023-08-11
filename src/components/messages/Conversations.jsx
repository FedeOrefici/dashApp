import { useState } from "react"
import validChat from "./validations"

const Conversations = ({patients, emailSelected}) => {

    const selectedPatient = patients.find((pat) => pat.email === emailSelected)
    const [send, setSend] = useState(false)
    const [sentMessages, setSendMessages] = useState('')

    const [message, setMessage] = useState({
        message: ''
    })
    const [errors, setErrors] = useState({
        message: ''
    })

    const handleChange = (event) => {
        setMessage({
            ...message,
            [event.target.name]: event.target.value
        })
        setErrors(validChat({
            ...message,
            [event.target.name]: event.target.value
          }))
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        setSendMessages(message.message)
        setMessage({
            message: ''
        })
        setSend(true)
    }


  return (
    <div className="w-full h-screen flex items-center">
    {selectedPatient ? (
        <div className="h-[100%] w-full flex flex-col items-center justify-between">
            <div className="w-full h-[90%] bg-slate-100 border border-red-500 p-2">
                <div className="bg-slate-200 border w-[70%] rounded h-[100px] mx-auto flex items-center justify-center">
                    <p>{selectedPatient.email}</p>
                </div>  
            </div>

            <div className="bg-red-400 w-full">
            {sentMessages && <p>{sentMessages}</p>}
            </div>
            
            <form onSubmit={handleSubmit} className="flex border h-[10%] items-center justify-around w-full bg-slate-300">
                <input value={message.message} name="message" onChange={handleChange} className="bg-gray-100 w-[85%] p-2 rounded" type="text" />
                <button type="submit" className="bg-[#6D6AFE] text-white rounded p-2 w-[15%]">send</button>
            </form>
        </div>
    ) : (
        <p>Select a patient to send an email</p>
    )}
    </div>
  )
}

export default Conversations