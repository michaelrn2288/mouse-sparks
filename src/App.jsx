import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sparkle from './Components/Sparkle'


export default function App() {

  const [mousePosition, setMousePosition] = useState({
    x: '',
    y: ''
  })

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
  
  return (
    <div
      className='someDiv'
    >

      <Sparkle
      mousePositionX={mousePosition.x}
      mousePositionY={mousePosition.y}
      />
    </div>
  )
}