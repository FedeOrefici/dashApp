import Navbar from "../navbar/Navbar"
import { Button, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { addUser, datapatients } from "../../redux/actions"
import { useEffect, useState } from "react"

const Home = () => {

  const dispatch = useDispatch()
  const allPatients = useSelector((state) => state.allPatients)

  useEffect(() => {
    datapatients()
  }, [dispatch, allPatients])

  const [users, setUsers] = useState({
    name: ''
  })
  
  const handleChange = (event) => {
    setUsers({
      ...users,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addUser(users))
    setUsers({
      name: ''
    })
  }

  

  return (
    <div>
        <Navbar />
        <p>home</p>
        <form onSubmit={handleSubmit}>
          <label>name</label>
          <input name="name" value={users.name} onChange={handleChange} type="text" />
          <Button type="submit">add patient</Button>
        </form>
        {allPatients?.map((patient, idx) => (
          <div key={idx}>
            <p>{patient.name}</p>
          </div>
        ))}
    </div>
  )
}

export default Home