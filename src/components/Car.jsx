import React from 'react'

export const Car = ({cars, addCar}) => {
  return (
    <div>
        <p>jeep:{cars.jeep}</p>
        <p>mazda:{cars.mazda}</p>
        <p>bmv:{cars.bmv}</p>
        <button type='button' onClick={()=>addCar('jeep')}>add jeep</button>
        <button type='button' onClick={()=>addCar('mazda')}>add mazda</button>
        <button type='button' onClick={()=>addCar('bmv')}>add bmv</button>



    </div>
  )
}
