import styled, { css, keyframes } from 'styled-components';

export const Arrow = styled.div`
  position: fixed;
  top: 2%;
  right: ${props => props.primary && '2%'};
  left: ${props => props.secondary && '2%'};
  font-size: 2em;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Exit = keyframes`
 0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
    }
    100% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
    }
`;

export const Main = styled.div`

    ${props=> props.animation && css`
        animation: ${Exit} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    `}

`
