import styled, { css, keyframes } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 98vw;
  max-height: 88vh;
  background: #fff;
  border-radius: 0 0 5px 5px;    
}
`;

export const SideNav = styled.div`
  display: inline-grid;
  grid-template-rows: repeat(4, 0.2fr) repeat(3, 30px);
  grid-template-columns: 0.75fr;
  grid-row-gap: 10px;
`;

export const Main = styled.div`
  height: 88vh;
  max-width: 73.35vw;
  display: grid;
  grid-template-columns: ${props =>
    props.columns ? props.columns : '1fr 1fr'};
  grid-template-rows: ${props => (props.rows ? props.rows : '1fr 1fr')};
  grid-row-gap: ${props => (props.rowGap ? props.rowGap : '5px')};
  grid-column-gap: ${props => (props.columnGap ? props.columnGap : '5px')};
`;

export const Container = styled.div`
  display: grid;

  ${props =>
    props.primary &&
    css`
      justify-items: center;
      grid-template-columns: 1fr repeat(2, 1fr);
      height: max-content;
    `}
    ${props =>
      props.secondary &&
      css`
        grid-template-columns: 1fr 1fr;
      `}
    ${props =>
      props.third &&
      css`
        position: absolute;
        bottom: 10px;
        right: 10px;
        padding: 2%;
        background: #fff;
        border-radius: 5px;
        grid-template-columns: 1fr 1fr;
        animation: ${Entrance} 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      `}
`;

export const Box = styled.div`
  display: grid;
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
  grid-column-start: ${props => props.main && '2'};

  ${props =>
    props.secondary &&
    css`
      grid-row-start: 2;
    `}
`;

export const Cont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-row-start: ${props => (props.rowStart ? props.rowStart : null)};
  grid-column-start: ${props => (props.colStart ? props.colStart : null)};
  grid-row-end: ${props => (props.rowEnd ? props.rowEnd : null)};
  grid-column-end: ${props => (props.colEnd ? props.colEnd : null)};
  border: 1px solid grey;
  font-size: 2em;

  ${props =>
    props.boxShadow &&
    css`
      box-shadow: ${props.boxShadow};
      background: #f4f4f4;
      font-size: 6em;
    `}

    &:focus {
    outline-color: grey;
  }
`;

export const P = styled.p`
  color: #282828;
  font-weight: 400;
`;

export const Text = styled.code`
  position: absolute;
  right: 40px;
  bottom: 200px;
  font-size: 1rem;
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  ${props =>
    props.type &&
    css`
      animation: ${Typing} 2.5s steps(40, end), ${Blink} 0.75s step-end infinite;
    `}
`;

const Entrance = keyframes`
0% {
    transform: translate(-15px, -15px);
    opacity: 0;
    }
    100% {
    transform: translate(0);
    opacity: 1;
    }
`;

const Typing = keyframes`
  from { width: 0 }
  to { width: 500px }
`;

const Blink = keyframes`
from, to { border-color: transparent }
50% { border-color: orange; }
`;
