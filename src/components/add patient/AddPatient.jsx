import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { Button, Alert,  AlertIcon,  AlertTitle,  AlertDescription, Text, FormControl } from "@chakra-ui/react"
import { addUser } from "../../redux/actions"
import validationsPatients from "./validations"


const AddPatient = () => {
    
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    const [user, setUser] =  useState({
        name: '',
        age: '',
        gender: '',
        symptoms: ''
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
      
      console.log(data, 'adasdadadadasda');
      
   
      dispatch(addUser(user))
      setUser({
          name: '',
          age: '',
          gender: '',
          symptoms: ''
      })
    }
    
    useEffect(() => {
      let timeOut = setTimeout(() => {setShowModal(false)}, 2000)
      return () => clearTimeout(timeOut)
    }, [showModal])

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <div>
                <label>name</label>
                <input name="name" value={user.name} onChange={handleChange} type="text" />
                {errors && <Text>{errors.name}</Text>}
            </div>
            <div>
                <label>age</label>
                <input name="age" value={user.age} onChange={handleChange} type="number" />
                {errors && <Text>{errors.age}</Text>}
            </div>
            <div>
                <label>gender</label>
                <select name="gender" value={user.gender} onChange={handleChange} type="text">
                  <option>select a genre</option>
                  <option>female</option>
                  <option>male</option>
                </select>
                {errors && <Text>{errors.gender}</Text>}
            </div>
            <div>
                <label>symptoms</label>
                <textarea name="symptoms" value={user.symptoms} onChange={handleChange}/>
                {errors && <Text>{errors.symptoms}</Text>}
            </div>
          <Button type="submit">add patient</Button>
          {showModal && (<Alert w='300px' status='error' rounded="base"><AlertIcon />Empty fields</Alert>)}
          </FormControl>
        </form>
    </div>
  )
}

export default AddPatient