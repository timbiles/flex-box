import styled, { css } from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 98vw;
  background: #94bfbe;
  font-size: 2em;
  border-radius: 5px 5px 0 0;
`;

export const Container = styled.div`
  display: flex;
  h2 {
        border-bottom: 1px solid #000;
        padding-bottom: 5px;
        margin: 5px 0; 
        width: max-content;
        align-self: center;
      }

${props =>
  props.main &&
  css`
    max-width: 98vw;
    border-radius: 0 0 5px 5px;
  `}
  ${props =>
    props.primary &&
    css`
      flex-direction: column;
      justify-content: flex-start;
      background: #f4f4f4;
      flex: 1;
      padding-top: 1%;
    `}
  ${props =>
    props.secondary &&
    css`
      flex-direction: column;
      justify-content: flex-start;
      background: #fff;
      border-radius: 5px;
      padding: 2%;
      margin: 1% 5%;
    `}
    ${props =>
      props.third &&
      css`
        justify-content: center;
        margin-top: 2%;
      `}
`;

export const Flex = styled.div`
  display: flex;
  flex: 3;
  background: #fff;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const P = styled.p`
  ${props =>
    props.main &&
    css`
      box-shadow: 1px 5px 21px -1px #000;
      background: #f4f4f4;
      padding: 5%;
      width: ${props => props.width};
      height: ${props => props.height};
    `}
    ${props =>
    props.secondary &&
    css`
      margin-right: 5%;
    `}
`;

export const Btn = styled.button`
  cursor: pointer;
  width: max-content;
  padding: 1% 3%;
  margin: 0 5%;
  border-radius: 5px;

  &:hover {
    background: #9cb8b8;
  }

  &:focus {
    outline: none;
  }

  ${props =>
    props.grid &&
    css`
      margin: 0;
    `}
`;

export const Input = styled.input`
  &:hover {
    background: #9faab7;
  }
  &:checked {
    background: #40e0d0;
  }
`;
