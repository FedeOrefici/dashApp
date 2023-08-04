import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { Button, Alert,  AlertIcon,  AlertTitle,  AlertDescription, Text, FormControl } from "@chakra-ui/react"
import { addUser } from "../../redux/actions"
import validationsPatients from "./validations"
import { storedPatient } from "../utils/local.storage"


const AddPatient = () => {
    
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    const [user, setUser] =  useState({
        name: '',
        age: '',
        symptoms: ''
      })

    const [errors, setErrors] = useState({
      name: '',
      age: '',
      symptoms: ''
    })
      
    const handleChange = (event) => {
      setUser({
        ...user,
        [event.target.name]: event.target.value
      })
      setErrors(validationsPatients({
        ...user,
        [event.target.name]: event.target.value
      }))
    }
    
    const handleSubmit = (event) => {
      event.preventDefault()
      const errors = validationsPatients(user)
      if(Object.keys(errors).length > 0){
        setShowModal(true)
        return;
      }
      dispatch(addUser(user))
      setUser({
          name: '',
          age: '',
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