import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Spark from './Components/Spark'

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

  const sparkElements = sparks.map(
    spark => (
      spark.exists &&
      <Spark
        key={spark.id}
        mousePositionX={mousePosition.x}
        mousePositionY={mousePosition.y}
      />
    )
  )

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

    function tryCreatingSpark(id) {
      setSparks(prevState => {
        return prevState.map(spark => (spark.id !== id ? spark : {
          ...spark,
          exists: fiftyPercentChanceTrue()
        }))
      })
    }

    for (let i = 0; i < 10; i++) {
      setInterval(() => {
        tryCreatingSpark(i)
      }, 300 * (i + 1))
    }

    tryCreatingSpark(0)
  }, [])

  return (
    <div
      className='someDiv'
    >
      {sparkElements}
    </div>
  )
}