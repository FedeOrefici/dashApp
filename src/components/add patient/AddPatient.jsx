import { useDispatch } from "react-redux"
import { useState } from "react"
import { Button, Alert,  AlertIcon,  AlertTitle,  AlertDescription } from "@chakra-ui/react"
import { addUser } from "../../redux/actions"


const AddPatient = () => {
    
    const dispatch = useDispatch()
    
    const [user, setUser] =  useState({
        name: '',
        age: '',
        symptoms: ''
      })
      
      const handleChange = (event) => {
        setUser({
          ...user,
          [event.target.name]: event.target.value
        })
      }
    
      const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser(user))
        setUser({
            name: '',
            age: '',
            symptoms: ''
        })
        return (
          <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Your browser is outdated!</AlertTitle>
          <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
          </Alert>
        )
      }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>name</label>
                <input name="name" value={user.name} onChange={handleChange} type="text" />
            </div>
            <div>
                <label>age</label>
                <input name="age" value={user.age} onChange={handleChange} type="number" />
            </div>
            <div>
                <label>symptoms</label>
                <textarea name="symptoms" value={user.symptoms} onChange={handleChange}/>
            </div>
          <Button type="submit">add patient</Button>
        </form>
    </div>
  )
}

export default AddPatient