import React from 'react';
import styled from 'styled-components';

const dots = (props) => {
    return (
        <Wrapper onClick={() => props.hit()}>
            <Dot/>
            <Dot/>
            <Dot/>            
        </Wrapper>
    );
};

export default dots;

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
`