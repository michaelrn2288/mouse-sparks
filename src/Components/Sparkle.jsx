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
left: ${props => props.mousePositionX}px;
top: ${props => props.mousePositionY}px;
font-weight: 700;
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
            sparkle
        </StyledSparkle>
    )
}