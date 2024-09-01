import { User } from "./User";
import React, { useState } from 'react'
import css from '../components/User.module.css'

export const UserList = ({users, hideBtn, hide,deleteUser}) => {
 

  return (
    <div className={css.cardUser}>
        {users.map((user)=>{
            return(
               <User
               key={user.id}
               name={user.name}
               lastName={user.lastName}
               email={user.email}
               tel={user.tel}
               hideBtn={hideBtn}
               hide={hide}
               deleteUser={deleteUser}
               id={user.id}
        
            
               />
            )

        })}
    </div>
  )
}
