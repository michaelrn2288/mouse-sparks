import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sparkle from './Components/Sparkle'

import {randomNumber, fiftyPercentChanceTrue} from './Utils/random'


export default function App() {

  const [mousePosition, setMousePosition] = useState({
    x: '',
    y: ''
  })
  const [sparks, setSparks]= useState([
    false, false, false, false, false,
    false, false, false, false, false
  ])

  useEffect(() => {
    function getMousePosition(event) {
      setMousePosition(
        {
          x: event.clientX,
          y: event.clientY
        }
      )
    }
    window.addEventListener('mousemove', getMousePosition)
    
    return ()=>{
      window.removeEventListener('mousemove', getMousePosition)
    }
  },[])

useEffect(()=>{

  setSparks(prevState => {
    return prevState.map(element => fiftyPercentChanceTrue())
  })
},[])
  
  return (
    <div
      className='someDiv'
    >

      {sparks[0] && <Sparkle
      mousePositionX={mousePosition.x}
      mousePositionY={mousePosition.y}
      />}
    </div>
  )
}