import React from 'react'
import { useState } from 'react'
import css from '../components/User.module.css'

export const User = ({name,lastname,email,tel}) => {
const [hide,setHide]=useState(false)
    const hideBtn=()=>{
        setHide(prevHide=>!prevHide)
      }

  return (
    <div className={hide?css.card:css.cardBorder}>
        
    <ol className={hide?css.hide:css.show}>
        <li>{name}</li>
        <li>{lastname}</li>
        <li>{email}</li>
        <li>{tel}</li>
    </ol>
    <button type='button' onClick={hideBtn}>{hide? `SHOW ${lastname}`:'HIDE'}</button>
    

    </div>
  )
}
