import { useState } from "react"

import { Car } from "./components/Car"


function App() {
 const cars={
  jeep:0,
  mazda:0,
  bmv:0,
 }
 
 const [car,setCar]=useState(cars)

const addCar=(carBrand)=>{setCar({...car, [carBrand]:car[carBrand]+1})}

  return (
    <>
    <Car cars={car} addCar={addCar}/>
    </>
  )
}

export default App
