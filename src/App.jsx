import { useState } from "react"


import { Alcobar } from "./components/Alcobar"

function App() {
 const alcohol={
  beer:0,
  vodka:0,
  rom:0,
 }
 const [alcoholDrink,setAlcoholDrink]=useState(alcohol)
 
 const addAlcohol=(alcoName)=>{
  setAlcoholDrink({...alcoholDrink, [alcoName]:alcoholDrink[alcoName]+1})
  
 }
 
  return (
    <>
    <Alcobar alcohol={alcoholDrink} addAlcohol={addAlcohol} setAlcoholDrink={setAlcoholDrink}/>
    </>
  )
}

export default App
