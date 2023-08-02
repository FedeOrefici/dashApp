import { NavLink } from "react-router-dom"
import { Tabs, TabList, Tab, TabPanels, TabPanel, Avatar } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Tabs>
    <TabList p="30px">
      <Avatar w="30px" h="30px" />
      <NavLink to="/home"><Tab>home</Tab></NavLink>
      <NavLink to="/appointments"><Tab>appointments</Tab></NavLink>
      <NavLink to="/messages"><Tab>messages</Tab></NavLink>
      <NavLink to="/"><Tab>logout</Tab></NavLink>
    </TabList>
  </Tabs>
  )
}

export default Navbar