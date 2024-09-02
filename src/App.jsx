
import { useState } from "react"

import { UserList } from "./components/UserList"
import usersData from './users.json'
import {SectionUser} from './components/SectionUser'
import { AddUserForm } from "./components/addUserForm/AddUserForm"
import { nanoid } from 'nanoid'

function App() {
  const [users, setUser]=useState(usersData)
  const[search,setSearch]=useState('')

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
 
 const handleSearch=(event)=>{
  const value=event.target.value
  setSearch(value)

 }

 const searchUser=users.filter((user)=>user.lastName.toLowerCase().includes(search.toLowerCase()))
  return (
    <>  
    <SectionUser>
      <AddUserForm addUser={addUser} />
    </SectionUser>
    <input type="text" placeholder="searh contact" value={search} onChange={handleSearch}></input>
    <SectionUser>
    
    <UserList users={users} deleteUser={deleteUser} searchUser={searchUser} />
    </SectionUser>
    </>
  )
}

export default App
