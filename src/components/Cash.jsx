import React from 'react'

export const Cash = ({dollar,grn,pol, addCash}) => {
  return (
    <div>
        <p>dollar:{dollar}</p>
        <p>grn:{grn}</p>
        <p>pol:{pol}</p>
        <button type='button' onClick={()=>addCash('dollar')}>add dollar</button>
    </div>
  )
}
