import Navbar from "../navbar/Navbar"
import { FormHelperText, Input, Container, Box, Select, Button, FormControl, Table, Alert, AlertIcon, AlertDescription, AlertTitle } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Appointments = () => {

  const patients = useSelector((state) => state.allPatients)

  const [showData, setShowData] = useState(false)

  const [appointment, setappointment] = useState({
    name: '',
    date: ''
  })

  const handleEvent = (event) => {
    setappointment({
      ...appointment,
      [event.target.name]: event.target.value
    })
    console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(appointment)
    setappointment({
      name: '',
      date: ''
    })
    setShowData(true)
  }

  useEffect(() => {
    if(showData){
      let timeOut = setTimeout(() => {setShowData(false)}, 2000)
      return () => clearTimeout(timeOut)
    }
  }, [showData])



  return (
    <div>
    <Navbar />
    <p>add an appointment</p>
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Container>
          <Box>
            <FormHelperText>Insert a patient</FormHelperText>
            <Select name="name" value={appointment.name} onChange={handleEvent}>
              {patients.map(pat => <option>{pat.name}</option>)}
            </Select>
          </Box>
          <Box>
            <FormHelperText>Select a date</FormHelperText>
            <Input name="date" value={appointment.date} onChange={handleEvent} type="date" />
          </Box>
          <Button type="submit">create</Button>
        </Container>
      </FormControl>
    </form>
    {showData && (
      <Alert w='300px' justifyContent="center" mx="auto" status='success'><AlertIcon />Appointment created</Alert>
    )}
    <Table>
      
    </Table>
    </div>
  )
}

export default Appointments