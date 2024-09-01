import React from 'react'
import { Contact } from './Contact'

export const ContactList = ({contacts, deleteContact}) => {
  return (
    <div>
        {contacts.map((contact)=>{
return <Contact 
        key={contact.id}
        name={contact.name}
        number={contact.number}
        deleteContact={deleteContact}
        id={contact.id}
        />
        })}
        
    </div>
  )
}
