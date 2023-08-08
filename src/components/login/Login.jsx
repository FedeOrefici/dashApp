import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import validationLogin from "./validation"
import back from '../../assets/index.jpg'
import './login.css'

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

    <div className="container"> 
    <div className="container-form">
        {showMessage && <p className="modal-message">Incomplete Fields</p>}
        <form className="form">
          <div className="cont-div">
            <div className="input-err">
                <input className="input-form" placeholder="name..." onChange={handleChange} value={user.name} name="name" type="text" />
                {error && <p style={{color:'red'}}>{error.name}</p>}
            </div>
            <div className="input-err">
                <input className="input-form" placeholder="password..." onChange={handleChange} value={user.password} name="password" type="password" />
                {error && <p style={{color:'red'}}>{error.password}</p>}
            </div>
            <button className="btn" onClick={handleLogin}>Login</button>
          </div>
        </form>
        <div style={{color:'#6D6AFE'}}>
          <span class="material-symbols-outlined">medication</span>
        </div>
    </div>
    <div style={{backgroundImage: `url(${back})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat', width: '100vh', height: '100vh'}}>
    </div>
    </div>
  )
}

export default Login