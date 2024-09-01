

import { useState } from "react"
import { ContactForm } from "./components/ContactForm"
import { ContactList } from "./components/ContactList"

import {nanoid} from 'nanoid'
function App() {
  const contactData=
  [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
 const [contacts,SetContacts]=useState(contactData)
 const addContact=(newContact)=>{
  const finalContact={
    ...newContact,
    id:nanoid()
  }
 SetContacts([finalContact,...contacts])
 }


  return (
    <>
  <ContactForm addContact={addContact}/>
    <ContactList contacts={contacts}/>
    </>
  )
}
export default App
