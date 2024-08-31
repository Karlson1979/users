import { useState } from "react"
import { Modal } from "./components/Modal"


function App() {
  const [isopenModal, setIsopenModal]=useState(false)
 const openModal=()=>{
  setIsopenModal (true)
 }
 const closeModal=()=>{
  setIsopenModal(false)
 }
  return (
    
    <>
    <button type="button" onClick={openModal}>is open</button>
   {isopenModal&& <Modal closeModal={closeModal}/>}
    </>
  )
}
export default App
