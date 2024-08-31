import { useEffect, useState } from 'react'
import css from './modal.module.css'



export const Modal = ({closeModal}) => {
   useEffect(()=>{
    
    const press=(event)=>{ 
       
if (event.code==='Escape'){
   
    closeModal()
}
    }
    window.addEventListener('keydown',press)
    return ()=> {
   
    window.removeEventListener('keydown',press)

    }
   },[closeModal])
   const [counter, setCounter]=useState(()=>{
   const valueLocal= parseInt (localStorage.getItem('counter'))
     return isNaN(valueLocal)?0:valueLocal
    }
    
   )
   
   const increment=()=>{
    setCounter(counter+1)
    
   }
   useEffect(()=>{
   localStorage.setItem('counter', counter)
},[counter])
  return (
    <div className={css.backdrop}>
        <div className={css.modal}>
            <button type='button' className={css.closeModalBtn} onClick={closeModal}>&times;</button>
            <h3 className={css.title}>MODAL</h3>
            <p className={css.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nobis aspernatur unde exercitationem eveniet. Esse laboriosam debitis expedita dolor? Ab ex excepturi pariatur iste eveniet est, fugit similique hic quae.</p>
<button type='button' onClick={increment}>increment: {counter}</button>
        </div>
        
    </div>
  )
  }
