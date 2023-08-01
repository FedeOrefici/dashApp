import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./components/login/Login"
import Home from "./components/home/Home"
import Appointments from "./components/appointments/Appointments"
import Messages from "./components/messages/Messages"
import Patients from "./components/patients/Patients"

function App() {


  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Fragment>
  )
}

export default App
