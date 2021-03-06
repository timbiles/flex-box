import styled, { css, keyframes } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 98vw;
  max-height: 87vh;
  background: #fff;
  border-radius: 5px;
`;

export const SideNav = styled.div`
  display: inline-grid;
  grid-template-rows: repeat(6, 0.2fr) repeat(2, .1fr);
  background: #f4f4f4;
  height: 87vh;
  overflow: scroll;
  border-radius: 5px 0 0 5px;
  padding: 0 2%;
`;

export const Main = styled.div`
  height: 87vh;
  max-height: 85vh;
  max-width: 73.35vw;
  padding: 0.5%;
  display: grid;
  grid-template-columns: ${props =>
    props.columns ? props.columns : '1fr 1fr'};
  grid-template-rows: ${props => (props.rows ? props.rows : '1fr 1fr')};
  grid-row-gap: ${props => (props.rowGap ? props.rowGap : '5px')};
  grid-column-gap: ${props => (props.columnGap ? props.columnGap : '5px')};
  border-radius: 0 5px 5px 0;
`;

export const Input = styled.input`
  width: 90%;
`;

export const Container = styled.div`
  display: grid;
  background: #fff;
  border-radius: 5px;

  h3 {
    border-bottom: 1px solid #000;
    margin: 5px 0; 
    margin-bottom: 5px;
    padding-bottom: 5px;
    width: max-content;
    justify-self: center;
    font-weight: 300;
  }

  h3::first-letter {
    font-size: 1.3em;
    font-weight: 400;
  }

  input {
    height: 1.4em;
    font-size: 1em;
  }

  input:focus {
    outline: none;
  }

  ${props =>
    props.main &&
    css`
      position: relative;
      margin: 2% 0;
      padding: 2%;
    `}

  ${props =>
    props.primary &&
    css`
      justify-items: center;
      grid-template-columns: repeat(3, 1fr);
      height: max-content;
      margin: 2% 10%;
      padding: 2%;
    `}
    ${props =>
      props.secondary &&
      css`
        grid-template-columns: 1fr 1fr;
        width: 100%;
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
  border: 1px dotted rgba(146, 189, 189, .5);
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
    props.main &&
    css`
      animation: ${Typing} 2.5s steps(40, end), ${Blink} 0.75s step-end infinite;
    `}
`;

export const Counter = styled.div`
  display: grid;
  grid-template-columns: 80px 100px 0.25fr;
  border-radius: 5px;
  align-items: center;
`;

const Typing = keyframes`
  from { width: 0 }
  to { width: 500px }
`;

const Blink = keyframes`
from, to { border-color: transparent }
50% { border-color: orange; }
`;
