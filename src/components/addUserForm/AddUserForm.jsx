import React from 'react'

import css from '../addUserForm/AddUserForm.module.css'
export const AddUserForm = ({addUser}) => {
    const handleSubmit=(event)=>{
event.preventDefault()
const formElements=event.currentTarget.elements
const name=formElements.name.value
const lastName=formElements.lastName.value
const email=formElements.email.value
const tel=formElements.tel.value
const userObject={
lastName,
  name,
  email,
  tel,
}
addUser(userObject)
event.currentTarget.reset()
    }
  return (
    <form onSubmit={handleSubmit} className={css.form}>
        <label>
            <span>LastName </span>
        <input type="text" name="lastName" required/>
        </label>
        <label>
            <span>Name</span>
        <input type="text" name="name" required/>
        </label>
        <label>
            <span>Email </span>
        <input type="email" name="email" required/>
        </label>
        <label>
            <span>Phone </span>
        <input type="phone" name="tel" required/>
        </label>
        <button type='submit'>Add User</button>
    </form>
  )
}
