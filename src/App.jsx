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
  const [mouseMoved, setMouseMoved] = useState(false)
  const [sparks, setSparks] = useState(createSparksArray())

  function createSparksArray() {
    let sparksArray = []
    for (let i = 0; i < 10; i++) {
      sparksArray.push({ id: i, exists: false })
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
    window.addEventListener('mousemove', () => {
      getMousePosition(event)
      !mouseMoved && setMouseMoved(true)
    })

    return () => {
      window.removeEventListener('mousemove', getMousePosition)
    }
  }, [])

  useEffect(() => {

    function createSpark(id) {
      setSparks(prevState => {
        return prevState.map(spark => spark.id !== id ? spark : {
          ...spark,
          exists: true
        })
      })
    }

    function removeSpark(id) {
      setSparks(prevState => {
        return prevState.map(spark => spark.id !== id ? spark : {
          ...spark,
          exists: false
        })
      })
    }

    sparks.forEach((element, index) => {
      setInterval(() => {
        createSpark(index)
      }, 100 * (index + 1))
      setInterval(() => {
        removeSpark(index)
      }, 100 * (index + 1) + 100)
    })

  }, [])

  return (
    <div
      className='someDiv'
    >
      {mouseMoved && sparkElements}
    </div>
  )
}