import React from 'react'

export const Alcobar = ({alcohol, addAlcohol}) => {
  return (
    <div>
        <p>beer: {alcohol.beer}</p>
        <p>vodka: {alcohol.vodka}</p>
        <p>rom: {alcohol.rom}</p>
        <button type='button' onClick={()=>addAlcohol('beer')}>add beer</button>
        <button type='button' onClick={()=>addAlcohol('vodka')}>add vodka</button>
        <button type='button' onClick={()=>addAlcohol('rom')}>add room</button>
    </div>
  )
}
