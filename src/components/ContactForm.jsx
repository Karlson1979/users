import React from 'react'

export const ContactForm = ({addContact}) => {
    const handleForm=(event)=>{
        event.preventDefault()
        const formElements=event.currentTarget.elements 
        const name=formElements.name.value 
        const number=formElements.number.value
      const contactObj={
name,
number,
      }
     addContact(contactObj)
     event.currentTarget.reset()
    }
  return (
    <form onSubmit={handleForm}>
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
