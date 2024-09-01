import React from 'react'

export const ContactForm = () => {
    const handleForm=(event)=>{
        event.preventDefault()
      
    }
  return (
    <form>
        <label>
            <span>name:</span>
            <input name='name'></input>
        </label>
        <label>
            <span>number:</span>
            <input name='number'></input>
        </label>
        <button type='submit'>add contact</button>
    </form>
  )
}
