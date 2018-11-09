import styled, { css } from 'styled-components';

export const Arrow = styled.div`
    position: fixed;
    top: 2%;
    right: 2%;
    font-size: 2em;
    color: #555;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }
`