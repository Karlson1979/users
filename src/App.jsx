import { useState, useEffect } from "react"


import { UserList } from "./components/UserList"
import users from './users.json'
import {SectionUser} from './components/SectionUser'
import { Counter } from "./components/Counter"

function App() {
const[counter,setCounter]=useState(()=>{
  return parseInt(localStorage.getItem('counter')??0)
})
 
 

  const increment=()=>{
    setCounter(counter+1)
  }
  const decrement=()=>{
    setCounter(counter-1)
  }
const reset=()=>{
   setCounter(0)
  }
  useEffect(()=>{localStorage.setItem('counter', counter)},[counter])
  const handleClick=(name)=>{
    console.log ('name:', name)
   }
  return (
    <>
    <SectionUser>
    <UserList users={users} handleClick={handleClick}/>
    </SectionUser>
    <Counter increment={increment} decrement={decrement} reset={reset} counter={counter}/>
    </>
  )
}

export default App
