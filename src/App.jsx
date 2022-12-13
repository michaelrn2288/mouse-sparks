import React, { useState, useEffect } from 'react'
import './App.css'
import Spark from './Components/Spark'

export default function App() {

  const [mousePosition, setMousePosition] = useState({
    x: '',
    y: ''
  })
  const [mouseMoved, setMouseMoved] = useState(false)
  const [mouseOutOfWindow, setMouseOutOfWindow] = useState(false)
  const [sparks, setSparks] = useState(createSparksArray())

  function createSparksArray() {
    let sparksArray = []
    for (let i = 0; i < 15; i++) {
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

    function mouseMoveListener() {
      getMousePosition(event)
      !mouseMoved && setMouseMoved(true)
    }

    function mouseLeaveListener() {
      setMouseOutOfWindow(true)
    }

    function mouseEnterListener() {
      setMouseOutOfWindow(false)
    }

    window.addEventListener('mousemove', mouseMoveListener)
    window.addEventListener('mouseout', mouseLeaveListener)
    window.addEventListener('mouseover', mouseEnterListener)

    return () => {
      window.removeEventListener('mousemove', mouseMoveListener)
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
      }, 100 * (index + 1) + 200)
    })

  }, [])

  return (
    <div
      className='someDiv'
    >
      {mouseMoved && !mouseOutOfWindow && sparkElements}
    </div>
  )
}