import { useState } from "react"

const Conversations = ({patients, emailSelected}) => {

    const selectedPatient = patients.find((pat) => pat.email === emailSelected)

    const [message, setMessage] = useState({
        message: ''
    })

    const handleChange = (event) => {
        setMessage({
            ...message,
            [event.target.name]: event.target.value
        })
    }





  return (
    <div className="w-full h-screen flex items-center">
    {selectedPatient ? (
        <div className="h-[100%] w-full flex flex-col items-center justify-between">
            <div className="w-full h-[90%] bg-slate-100">
                <p>{selectedPatient.email}</p>   
            </div>
            <div className="flex border h-[10%] items-center justify-around w-full bg-slate-300">
                <input className="bg-gray-100 w-[85%] p-2 rounded" type="text" />
                <button className="bg-[#6D6AFE] rounded p-2 w-[15%]">send</button>
            </div>
        </div>
    ) : (
        <p>Select a patient to send an email</p>
    )}
    </div>
  )
}

export default Conversations