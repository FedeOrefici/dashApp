import AddPatient from "../add patient/AddPatient"
import Navbar from "../navbar/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Card, CardBody, Text } from "@chakra-ui/react"


const Patients = () => {

  
  const patients = useSelector((state) => state.allPatients)
  const storage = localStorage.setItem('patients', JSON.stringify(patients))
  const storageData = localStorage.getItem('patients')
  const parsedData = JSON.parse(storageData)

  return (
    <div>
      <Navbar />
      <div>
        {parsedData && parsedData.length > 0 
        ? ( parsedData?.map((pat, idx) => (
          <Card>
            <CardBody key={idx}>
              <Text>{pat.name}</Text>
              <Text>{pat.age}</Text>
              <Text>{pat.symptoms}</Text>
            </CardBody>
          </Card>
        ))) 
        : (<p>no hay data</p>)}
      </div>
      <AddPatient />
    </div>
  );
};
export default Patients