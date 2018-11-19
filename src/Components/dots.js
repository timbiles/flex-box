import React from 'react';
import styled, {keyframes, css} from 'styled-components';

const dots = (props) => {
    return (
        <Wrapper onClick={() => props.hit()}>
            <Dot delay='0s'/>
            <Dot delay='.1s'/>
            <Dot delay='.2s'/>            
        </Wrapper>
    );
};

export default dots;



const Up = keyframes`
    0% {
        transform: translate(0)
    }
    40% {
        transform: translateY(-4px)        
    }
    60% {
        transform: translate(0)
    }
`

const Wrapper = styled.div`
    position: absolute;
    bottom: 5px;
    right: 3px;
    display: flex;
    cursor: pointer;
`
const Dot = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: grey;
    margin: 0 3px;
    animation: ${Up} .8s 2;
    animation-delay: ${props => props.delay};
`



