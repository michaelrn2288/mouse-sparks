import React from 'react'
import styled, { keyframes } from 'styled-components'

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
left: ${props => props.mousePositionX}px;
top: ${props => props.mousePositionY}px;
animation-name: ${sparkleAnimation};
animation-duration: 2.5s;
animation-iteration-count: infinite;
`

export default function Sparkle(props) {

    return (
        <StyledSparkle
            mousePositionX={props.mousePositionX}
            mousePositionY={props.mousePositionY}
        >

        </StyledSparkle>
    )
}