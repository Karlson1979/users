import React from 'react'
import { useState } from 'react'


import css from '../components/User.module.css'

export const User = ({name,lastName,email,tel,id,deleteUser}) => {
const [hide,setHide]=useState(true)
    const hideBtn=()=>{
        setHide(prevHide=>!prevHide)
      }

  return (
    <div className={hide?css.card:css.cardBorder}>
        
    <ol className={hide?css.hide:css.show}>
        <li>{name}</li>
        <li>{lastName}</li>
        <li>{email}</li>
        <li>{tel}</li>
    </ol>
    <button type='button' onClick={hideBtn}>{hide? `SHOW ${lastName}`:'HIDE'}</button>
    <button type='button'onClick={()=>deleteUser(id)} >delete</button>

    </div>
  )
}
