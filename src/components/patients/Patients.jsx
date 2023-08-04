import AddPatient from "../add patient/AddPatient"
import Navbar from "../navbar/Navbar"
import { useSelector } from "react-redux"
import { Card, CardBody, Text, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { deletePatient } from "../../redux/actions"


const Patients = () => {

  const patients = useSelector((state) => state.allPatients)
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
                <Text>{pat.name}</Text>
                <Text>{pat.age}</Text>
                <Text>{pat.symptoms}</Text>
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