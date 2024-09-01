import { User } from "./User";
import React, { useState } from 'react'
import css from '../components/User.module.css'

export const UserList = ({users, hideBtn, hide}) => {
 

  return (
    <div className={css.cardUser}>
        {users.map((user)=>{
            return(
               <User
               key={user.email}
               name={user.name}
               lastname={user.lastName}
               email={user.email}
               tel={user.tel}
               hideBtn={hideBtn}
               hide={hide}
        
            
               />
            )

        })}
    </div>
  )
}
