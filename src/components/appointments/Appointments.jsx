import Navbar from "../navbar/Navbar"
import { FormHelperText, Input, Container, Box, Select, Button, FormControl, Table, Alert, AlertIcon, TableContainer, Thead, Th, Tr, Tbody, Td, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAppointments } from "../../redux/actions"
import validationAppointments from "./validations"


const Appointments = () => {

  const patients = useSelector((state) => state.allPatients)
  const appointData = useSelector((state) => state.appointments)
  const dispatch = useDispatch()
  const [showData, setShowData] = useState(false)


  const [appointment, setappointment] = useState({
    name: '',
    date: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    date: ''
  })

  const handleEvent = (event) => {
    setappointment({
      ...appointment,
      [event.target.name]: event.target.value
    })
    setErrors(validationAppointments({
      ...appointment,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const erorrs = validationAppointments(appointment)
    if(Object.keys(erorrs).length > 0){
      return null;
    } else {
      setShowData(true)
      dispatch(addAppointments(appointment))
      setappointment({
        name: '',
        date: ''
      })
    }
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
                <option selected>Select a patient</option>
              {patients.map(pat =>
                <option>{pat.name}</option>
              )}
            </Select>
            {errors && <Text>{errors.name}</Text>}
          </Box>
          <Box>
            <FormHelperText>Select a date</FormHelperText>
            <Input name="date" value={appointment.date} onChange={handleEvent} type="date" />
            {errors && <Text>{errors.date}</Text>}
          </Box>
          <Button type="submit">confirm</Button>
        </Container>
      </FormControl>
    </form>
    {showData && (
      <Alert w='300px' justifyContent="center" status='success'><AlertIcon />Appointment created</Alert>
    )}
    {Object.keys(errors).length > 0 ? (!showData && (
      <Alert w='300px' justifyContent="center" status="error"><AlertIcon />Incomplete fields</Alert>)
    ): (null)}
      
            {appointData && appointData.length > 0 ? (
              appointData.map(app => (
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>name</Th>
                  <Th>date</Th>
                </Tr>
              </Thead>
              <Tbody>
              <Tr>
                <Td>{app.name}</Td>
                <Td>{app.date}</Td>
                <Td>
                  <Button>delete</Button>
                </Td>
              </Tr>
              </Tbody>
            </Table>
          </TableContainer>
              ))
            ) : ( <Text>No appointments in your list</Text> )}

    </div>
  )
}

export default Appointments