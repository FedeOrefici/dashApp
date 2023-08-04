import { NavLink } from "react-router-dom"
import { Tabs, TabList, Tab, Avatar, Box, Text } from "@chakra-ui/react"
import profile from '../../assets/doc.jpg'

const Navbar = () => {
  return (
    <Tabs>
    <TabList p="30px" display="flex" alignItems="center" justifyContent="center">
      <Box display="flex" alignItems="center" bg="pink.100" w="300px" rounded="base" h="70px" justifyContent="space-evenly" gap="10px">
        <Avatar w="50px" h="50px" src={profile} />
        <Text>Dr. Williams</Text>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-around" w="2xl" h="70px">
        <NavLink to="/home"><Tab>home</Tab></NavLink>
        <NavLink to="/appointments"><Tab>appointments</Tab></NavLink>
        <NavLink to="/patients"><Tab>patients</Tab></NavLink>
        <NavLink to="/messages"><Tab>messages</Tab></NavLink>
        <NavLink to="/"><Tab>logout</Tab></NavLink>
      </Box>
    </TabList>
  </Tabs>
  )
}

export default Navbar