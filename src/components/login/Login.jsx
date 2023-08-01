import { useNavigate } from "react-router-dom"


const Login = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/home")
  }


  return (
    <div>
        <form>
            <div>
                <label>name</label>
                <input type="text" />
            </div>
            <div>
                <label>pasword</label>
                <input type="password" />
            </div>
            <button onClick={handleLogin}>login</button>
        </form>
    </div>
  )
}

export default Login