import { useEffect, useState } from "react"
import validChat from "./validations"
import doc from '../../assets/doc.jpg'

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

    useEffect(() => {
        setSendMessages('')
    }, [emailSelected])


    const handleSubmit = (event) => {
        event.preventDefault()
        const errors = validChat(message)
        if(Object.keys(errors).length > 0){
            setSend(true)
        }
        setSendMessages(message.message)
        setMessage({
            message: ''
        })
    }

    useEffect(() => {
        if(send){
            let timeOut = setTimeout(() => {setSend(false)}, 2000)
            return () => clearTimeout(timeOut)
        }
    }, [send])


  return (
    <div className="w-full h-[800px] flex items-center">
    {selectedPatient ? (
        <div className="h-[100%] w-full flex flex-col items-center justify-between">
            <div className="w-full pt-2">
                <div className="text-black w-[100%] h-[100px] flex items-center justify-center">
                    <p>to: {selectedPatient.email}</p>
                </div>  
            </div>

                {sentMessages && emailSelected === selectedPatient.email && 
                <div className="w-[70%] rounded p-2 min-h-[500px] flex items-center justify-center border">
                        <div className="flex items-center justify-center flex-col p-4">
                            <p className="h-[400px] italic text-black">{sentMessages}</p>
                            <div className="flex flex-col items-center justify-center py-2">
                                <img className="w-[30px] h-[30px] rounded-full" src={doc} /> 
                                <p>Dr. Doctor</p>
                                <p>Public Hospital n° 10</p>
                            </div>
                        </div>
                </div>
                }
                {send && <p className="bg-red-600 w-[300px] rounded h-[50px] text-white flex justify-center items-center">Incomplete Fields</p>} 
      
            
            <form onSubmit={handleSubmit} className="flex h-[10%] items-center justify-around w-full bg-slate-300">
                <input value={message.message} name="message" onChange={handleChange} className="bg-gray-100 w-[90%] p-2 rounded" type="text" />
                <button type="submit" className="bg-[#6D6AFE] text-white rounded p-2 w-[10%]">
                    <span class="material-symbols-outlined">send</span>
                </button>
            </form>
        </div>
    ) : (
        <div className="flex flex-col w-full h-screen items-center justify-center">
            <p className="text-2xl font-bold text-[#6D6AFE]">Select a patient</p>
            <p className="italic font-medium1">to send an email</p>
        </div>
    )}
    </div>
  )
}

export default Conversations