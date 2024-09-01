
import { useState } from "react"

import { UserList } from "./components/UserList"
import usersData from './users.json'
import {SectionUser} from './components/SectionUser'
import { AddUserForm } from "./components/addUserForm/AddUserForm"
import { nanoid } from 'nanoid'

function App() {
  const [users, setUser]=useState(usersData)

  localStorage.setItem('user',JSON.stringify(users))

  const addUser=(newuser)=>{
    const finalUser={
      ...newuser, 
      id:nanoid()
    }
    setUser([finalUser,...users])

  }
 const deleteUser=(userId)=>{
 setUser (users.filter((item)=>{
return item.id !==userId
  }))
 }
 
  return (
    <>  
    <SectionUser>
      <AddUserForm addUser={addUser} />
    </SectionUser>
    
    <SectionUser>
    
    <UserList users={users} deleteUser={deleteUser} />
    </SectionUser>
    </>
  )
}

export default App
