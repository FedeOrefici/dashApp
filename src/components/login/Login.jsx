import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Alert, AlertIcon } from "@chakra-ui/react"


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
  }

  const handleLogin = (event) => {
    event.preventDefault()
    user.name === 'admin' && user.password === 'admin' ? navigate("/home") : setShowMessage(true)
    
  }

  useEffect(() => {
    if(showMessage){
      let timeOut = setTimeout(() => {setShowMessage(false)}, 2000)
      return () => clearTimeout(timeOut)
    }
  }, [showMessage])
  
  


  return (
    <div>
        <form>
        {showMessage && <Alert w='300px' status='error'><AlertIcon />Incomplete Fields</Alert>}
            <div>
                <label>name</label>
                <input onChange={handleChange} value={user.name} name="name" type="text" />
            </div>
            <div>
                <label>pasword</label>
                <input onChange={handleChange} value={user.password} name="password" type="password" />
            </div>
            <button onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default Login