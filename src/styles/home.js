import styled, { keyframes } from 'styled-components';

export const Arrow = styled.div`
  position: fixed;
  top: 4%;
  height: 30px;
  width: 50px;
  right: ${props => props.primary && '2%'};
  left: ${props => props.secondary && '2%'};
  clip-path: polygon(0 30%, 60% 30%, 60% 0%, 100% 50%, 60% 100%, 60% 70%, 0 70%);
  transform: ${props => props.rotate};
  background: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.05) ${props => props.rotate};    
  }

  &:active {
    transform: scale(.98) ${props => props.rotate};    
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
    padding: 1vh 1vw;
    background: #e1e1e1;
`
