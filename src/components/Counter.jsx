import React from 'react'

export const Counter = ({counter, increment, decrement, reset}) => {
  return (
    <div>Counter:{counter}
    <button type='button' onClick={increment}>increment</button>
    <button type='button' onClick={decrement}>decrement</button>
    <button type='button' onClick={reset}>reset</button>


    </div>
  )
}
