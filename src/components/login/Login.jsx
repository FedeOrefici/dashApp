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

    <div className="flex h-screen w-full"> 
          <div className="w-1/2 flex items-center justify-center flex-col">
            <form className="w-1/2 h-[80%] flex items-center justify-center flex-col">
                <div className="h-[120px] w-full flex flex-col p-2 justify-center">
                    <input className="w-full h-[50px] pl-2 border bg-gray-100" placeholder="name..." onChange={handleChange} value={user.name} name="name" type="text" />
                    {error && <p className="text-red-600 py-2 h-[50px]">{error.name}</p>}
                </div>
                <div className="h-[120px] w-full flex flex-col px-2 justify-center">
                    <input className="w-full h-[50px] pl-2 border bg-gray-100" placeholder="password..." onChange={handleChange} value={user.password} name="password" type="password" />
                    {error && <p className="text-red-600 py-2 h-[50px]">{error.password}</p>}
                </div>
                <div className="flex flex-col justify-center items-center h-[200px] w-full px-2">
                  <button className="bg-[#6D6AFE] rounded text-white shadow-lg w-[300px] h-[50px] absolute bottom-[400px]" onClick={handleLogin}>Login</button>
                  {showMessage && <p className="bg-red-600 w-[300px] rounded h-[50px] text-white flex justify-center items-center">Incomplete Fields</p>} 
                </div>
            </form>
            <div style={{color:'#6D6AFE'}}>
              <span class="material-symbols-outlined">medication</span>
            </div>
          </div>


          <div className="w-1/2 flex justify-end">
            <img className="w-[700px] h-screen" src={back} />
          </div>
    </div>
  )
}

export default Login