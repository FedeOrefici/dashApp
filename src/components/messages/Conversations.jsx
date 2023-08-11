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
    <div className="w-full h-screen flex items-center">
    {selectedPatient ? (
        <div className="h-[100%] w-full flex flex-col items-center justify-between">
            <div className="w-full pt-2">
                <div className="bg-slate-200 border w-[70%] rounded h-[100px] mx-auto flex items-center justify-center">
                    <p>{selectedPatient.email}</p>
                </div>  
            </div>

                {sentMessages && emailSelected === selectedPatient.email && 
                <div className="bg-slate-200 w-[70%] rounded p-2 min-h-[700px] flex items-center justify-center">
                        <div className="bg-white p-2">
                            <p className="h-[400px] italic">{sentMessages}</p>
                            <div className="bg-slate-50 flex flex-col items-center justify-center py-2">
                                <img className="w-[30px] h-[30px] rounded-full" src={doc} /> 
                                <p>Dr. Doctor</p>
                                <p>Public Hospital n° 10</p>
                            </div>
                        </div>
                </div>
                }
                {send && <p className="bg-red-600 w-[300px] rounded h-[50px] text-white flex justify-center items-center">Incomplete Fields</p>} 
      
            
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