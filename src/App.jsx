
import { useState } from "react"

import { UserList } from "./components/UserList"
import usersData from './users.json'
import {SectionUser} from './components/SectionUser'
import { AddUserForm } from "./components/addUserForm/AddUserForm"
import { nanoid } from 'nanoid'

function App() {
  const [users, setUser]=useState({})

  const addUser=(newuser)=>{
    const finalUser={
      ...newuser, 
      id:nanoid()
    }
    setUser([finalUser,...users])

  }
 
 
  return (
    <>  
    <SectionUser>
      <AddUserForm addUser={addUser}/>
    </SectionUser>
    
    <SectionUser>
    
    <UserList users={users}  />
    </SectionUser>
    </>
  )
}

export default App
