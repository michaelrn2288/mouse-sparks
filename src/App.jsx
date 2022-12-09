import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sparkle from './Components/Sparkle'

import { randomNumber, fiftyPercentChanceTrue } from './Utils/random'


export default function App() {

  const [mousePosition, setMousePosition] = useState({
    x: '',
    y: ''
  })
  const [sparks, setSparks] = useState([
    { id: 0, exists: false },
    { id: 1, exists: false },
    { id: 2, exists: false },
    { id: 3, exists: false },
    { id: 4, exists: false },
    { id: 5, exists: false },
    { id: 6, exists: false },
    { id: 7, exists: false },
    { id: 8, exists: false },
    { id: 9, exists: false }
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

    return () => {
      window.removeEventListener('mousemove', getMousePosition)
    }
  }, [])

  useEffect(() => {

    setSparks(prevState => {
      return prevState.map(spark => ({
        ...spark,
        exists: fiftyPercentChanceTrue()
      }))
    })
  }, [])

  return (
    <div
      className='someDiv'
    >

      {sparks[0].exists && <Sparkle
        mousePositionX={mousePosition.x}
        mousePositionY={mousePosition.y}
      />}
    </div>
  )
}