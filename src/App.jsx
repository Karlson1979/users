import { useState } from "react"
import { Cash } from "./components/Cash"

function App() {
 const [cash,setCash]=useState({
  dollar:0,
  grn:0,
  pol:0,
 })
 const addCash=(valut)=>{setCash({...cash,[valut]:cash[valut]+1})}
  return (
    <>
    <Cash dollar={cash.dollar} grn={cash.grn} pol={cash.pol}  addCash={addCash}/>
    </>
  )
}
export default App
