import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import randomNumber from '../Utils/randomNumber'

const sparkleAnimation = keyframes`
from{
transform: translateY(0);
opacity: 1;
}
to {
transform: translateY(200px);
opacity: 0;
}
`

const StyledSparkle = styled.div`
position: absolute;
width: 30px;
height: 30px;
border-radius: 50%;
background-color: rgb(255, 255, 0);
box-shadow: inset 0 0 12px rgb(255,255,255),
            0 0 12px rgb(255,255,0);
left: ${props => props.initialPosition.x}px;
top: ${props => props.initialPosition.y}px;
animation-name: ${sparkleAnimation};
animation-duration: 2.5s;
animation-iteration-count: infinite;
`

export default function Sparkle(props) {

    const [initialPosition, setInitialPosition] = useState({
        x: '',
        y: ''
    })

    useEffect(() => {
        setInitialPosition({
            x: props.mousePositionX + randomNumber(-20, 20),
            y: props.mousePositionY + randomNumber(0, 20)
        })
    }, [])

    return (
        <StyledSparkle
            mousePositionX={props.mousePositionX}
            mousePositionY={props.mousePositionY}
            initialPosition={initialPosition}
        />
    )
}