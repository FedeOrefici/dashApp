import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import validationLogin from "./validation"
import back from '../../assets/index.jpg'


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
    
    user.name === 'doctor' && user.password === 'doctor' ? navigate("/patients") : setShowMessage(true)

  }

  useEffect(() => {
    if(showMessage){
      let timeOut = setTimeout(() => {setShowMessage(false)}, 2000)
      return () => clearTimeout(timeOut)
    }
  }, [showMessage])
  

  return (

    <div> 
    <div>
        <form>
          <div>
            <div>
                <label>name</label>
                <input onChange={handleChange} value={user.name} name="name" type="text" />
                {error && <p>{error.name}</p>}
            </div>
            <div h="100px">
                <label>pasword</label>
                <input onChange={handleChange} value={user.password} name="password" type="password" />
                {error && <p>{error.password}</p>}
            </div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </form>
        {showMessage && <p>Incomplete Fields</p>}
    </div>

    <div style={{backgroundImage: `url(${back})`,
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      width: '100vh',
      height: '100vh',
      marginLeft: 'auto'
      }}>
    </div>
    </div>
  )
}

export default Login