import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { addUser } from "../../redux/actions"
import validationsPatients from "./validations"
import FileBase64 from 'react-file-base64'



const AddPatient = () => {
    
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    

    const [user, setUser] =  useState({
        name: '',
        age: '',
        gender: '',
        symptoms: '',
        file: ''
      })

    const [errors, setErrors] = useState({
      name: '',
      age: '',
      gender: '',
      symptoms: ''
    })
      
    const handleChange = (event) => {
      setUser({
        ...user,
        [event.target.name]: event.target.name === 'age' ? +event.target.value : event.target.value
      })
      setErrors(validationsPatients({
        ...user,
        [event.target.name]: event.target.value
      }))
    }
    
    const handleSubmit = (event) => {
      event.preventDefault()
      const ageValue = parseInt(user.age, 10)
      if(isNaN(ageValue)){
        setShowModal(true)
        return;
      }
      const errors = validationsPatients(user)
      if(Object.keys(errors).length > 0){
        setShowModal(true)
        return;
      }
      const data = JSON.parse(localStorage.getItem('patients')) ??  []
      data.push(user)
      localStorage.setItem("patients", JSON.stringify(data))
      dispatch(addUser(user))
      setUser({
          name: '',
          age: '',
          gender: '',
          symptoms: '',
          file: ''
      })
    }
    
    useEffect(() => {
      let timeOut = setTimeout(() => {setShowModal(false)}, 2000)
      return () => clearTimeout(timeOut)
    }, [showModal])


    console.log(user);

  return (
    <div className="w-1/2 flex items-center justify-center h-screen">
        <form className="w-[80%] flex flex-col items-center justify-center h-[90%] shadow-md" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col items-center">
            <div className="w-2/3 h-[120px] flex flex-col justify-center gap-2">
                <label className="h-[20px] px-2 font-medium">name</label>
                <input className="h-[35px] bg-gray-100 border p-2" name="name" value={user.name} onChange={handleChange} type="text" />
                {errors && <p className="h-[50px] text-red-600 p-2">{errors.name}</p>}
            </div>
            <div className="w-2/3 h-[120px] flex flex-col justify-center gap-2">
                <label className="h-[20px] px-2 font-medium">age</label>
                <input className="h-[35px] bg-gray-100 border px-2" name="age" value={user.age} onChange={handleChange} type="number" />
                {errors && <p className="h-[50px] text-red-600 p-2">{errors.age}</p>}
            </div>
            <div className="w-2/3 flex flex-col justify-center">
                <select className="bg-slate-100 py-2 rounded text-center" name="gender" value={user.gender} onChange={handleChange} type="text">
                  <option>select a genre</option>
                  <option>female</option>
                  <option>male</option>
                </select>
                {errors && <p className="h-[50px] text-red-600 p-2">{errors.gender}</p>}
            </div>
            <div className="w-2/3 h-[250px] gap-2 flex flex-col justify-center">
                <label className="h-[20px] px-2 font-medium">symptoms</label>
                <textarea className="bg-slate-100 h-[150px] rounded p-2" name="symptoms" value={user.symptoms} onChange={handleChange}/>
                {errors && <p className="h-[50px] text-red-600 p-2">{errors.symptoms}</p>}
            </div>
            
            <div className="w-1/2 flex items-center justify-center">
              <FileBase64
              multiple={false}
              onDone={(base64) => setUser({...user, file: base64})}
               />
            </div>
            <div className="flex items-center flex-col justify-center h-[200px] w-full mt-4">
              <button className="bg-[#6D6AFE] w-[200px] h-[50px] font-medium py-2 text-white rounded shadow-lg absolute bottom-[120px]" type="submit">add patient</button>
              {showModal && (<div className="bg-red-600 text-white w-[200px] h-[50px] py-2 rounded flex items-center justify-center">Empty fields</div>)}
            </div>
            
          </div>
        </form>
    </div>
  )
}

export default AddPatient