import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Alert, AlertIcon, Box, Button, Container, Input, Text } from "@chakra-ui/react"
import validationLogin from "./validation"

const Login = () => {

  const navigate = useNavigate()
  const [showMessage, setShowMessage] = useState(false)

  const [user, setUser] = useState({
    name: '',
    password: ''
  })

  const [error, setError] = useState({
    name: '',
    password: ''
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
    setError(validationLogin({
      ...user,
      [event.target.name]: event.target.value
    }))
  }

  const handleLogin = (event) => {
    event.preventDefault()
    
    user.name === 'doctor' && user.password === 'doctor' ? navigate("/home") : setShowMessage(true)

  }

  useEffect(() => {
    if(showMessage){
      let timeOut = setTimeout(() => {setShowMessage(false)}, 2000)
      return () => clearTimeout(timeOut)
    }
  }, [showMessage])
  
  


  return (
    <Container bg="blue.900">
        <form>
          <Container display="flex" justifyContent="center" flexDirection="column">
            <Box border="1px" h="100px">
                <label>name</label>
                <Input onChange={handleChange} value={user.name} name="name" type="text" />
                {error && <Text>{error.name}</Text>}
            </Box>
            <Box border="1px" h="100px">
                <label>pasword</label>
                <Input onChange={handleChange} value={user.password} name="password" type="password" />
                {error && <Text>{error.password}</Text>}
            </Box>
            <Button w="200px" mt="30px" onClick={handleLogin}>Login</Button>
          </Container>
        </form>
        {showMessage && <Alert w='300px' status='error' rounded="sm"><AlertIcon />Incomplete Fields</Alert>}
    </Container>
  )
}

export default Login