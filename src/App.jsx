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
  const [sparks, setSparks] = useState(createSparksArray())

  function createSparksArray() {
    let sparksArray = []
    for (let i = 0; i < 15; i++) {
      sparksArray.push({id: i, exists: false})
    }
    return sparksArray
  }

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
        return prevState.map(spark => spark.id !== id ? spark : {
          ...spark,
          exists: fiftyPercentChanceTrue()
        })
      })
    }

      sparks.forEach((element, index) => {
        setInterval(() => {
          tryCreatingSpark(index)
        }, 100 * (index + 1))
    })

  }, [])

  return (
    <div
      className='someDiv'
    >
      {sparkElements}
    </div>
  )
}