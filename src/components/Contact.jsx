import React from 'react'

export const Contact = ({name, number,deleteContact,id}) => {
  return (
    <div>
        <p>name:{name}</p>
        <p>number: {number}</p>
        <button type='button' onClick={()=>deleteContact(id)}>delete</button>
        
    </div>
  )
}
