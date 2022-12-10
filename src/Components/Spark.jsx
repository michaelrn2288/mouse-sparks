import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import {randomNumber} from '../Utils/random'

const SparkAnimation = keyframes`
from{
transform: translateY(0);
opacity: 1;
}
to {
transform: translateY(200px);
opacity: 0;
}
`

const StyledSpark = styled.div`
position: absolute;
width: 11px;
height: 11px;
border-radius: 50%;
background-image: radial-gradient(circle,
    rgba(255,255,255,1) 0%,
    rgba(255,255,122,1) 45%,
    rgba(245,255,0,1) 75%,
    rgba(255,190,0,1) 100%);
box-shadow: 0 0 15px 4px rgba(255, 190, 0, 0.5);
left: ${props => props.initialPosition.x}px;
top: ${props => props.initialPosition.y}px;
animation-name: ${SparkAnimation};
animation-duration: 1.3s;
animation-fill-mode: forwards;
`

export default function Spark(props) {

    const [initialPosition, setInitialPosition] = useState({
        x: '',
        y: ''
    })

    useEffect(() => {
        setInitialPosition({
            x: props.mousePositionX + randomNumber(-15, 15),
            y: props.mousePositionY + randomNumber(20, 30)
        })
    }, [])

    return (
        <StyledSpark
            mousePositionX={props.mousePositionX}
            mousePositionY={props.mousePositionY}
            initialPosition={initialPosition}
        />
    )
}