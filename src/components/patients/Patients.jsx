import AddPatient from "../add patient/AddPatient"
import Navbar from "../navbar/Navbar"
import { useSelector } from "react-redux"
import { Card, CardBody, Text, Button, Box } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { deletePatient } from "../../redux/actions"
import { useEffect, useState } from "react"

const Patients = () => {

  const [initialPatient, setInitialPatient] = useState([])
  const patients = useSelector((state) => state.allPatients)


  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patients"))
  }, [])

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients))
  }, [patients])

  const dispatch = useDispatch()
  
  const delPatient = (id) => {
    dispatch(deletePatient(id))
  }




  return (

    <div>
      <Navbar />
        <div>
          {patients && patients.length > 0 
          ? ( patients?.map((pat, id) => (
            <Card w="sm" bg="blue.100" key={id}>
              <CardBody>
                <Box>
                  <Text>Name</Text>
                  <Text>{pat.name}</Text>
                </Box>
                <Box>
                  <Text>Age</Text>
                  <Text>{pat.age}</Text>
                </Box>
                <Box>
                  <Text>Symptoms</Text>
                  <Text>{pat.symptoms}</Text>
                </Box>
                <Button>Edit</Button>
                <Button onClick={() => delPatient(id)}>Delete</Button>
              </CardBody>
            </Card>
          ))) 
          : (<Text>no patients on your list</Text>)}
        </div>
      <AddPatient />
    </div>

  );
};
export default Patients