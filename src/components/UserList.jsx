import { User } from "./User";
import React from 'react'
import css from '../components/User.module.css'

export const UserList = ({users, hideBtn, hide, handleClick}) => {
  
  return (
    <div className={css.cardUser}>
        {users.map((user)=>{
            return(
               <User
               key={user.email}
               name={user.name}
               lastname={user.lastname}
               email={user.email}
               tel={user.tel}
               hideBtn={hideBtn}
               hide={hide}
               handleClick={handleClick}
               />
            )

        })}
    </div>
  )
}
