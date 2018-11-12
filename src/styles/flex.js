import styled, { css } from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background: #94BFBE;
  font-size: 2em;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  h2 {
        border-bottom: 1px solid #000;
        padding-bottom: 2%;
        margin-top: 5%;        
        margin-bottom: 2%;
        width: max-content;
        align-self: center;
      }

${props =>
  props.main &&
  css`
    min-height: 90vh;
  `}
  ${props =>
    props.primary &&
    css`
      flex-direction: column;
      justify-content: flex-start;
      flex: 1;
      border-right: 1px solid grey;
    `}
  ${props =>
    props.secondary &&
    css`
      flex-direction: column;
      justify-content: flex-start;
      text-align: center;
    `}
    ${props =>
      props.third &&
      css`
        margin-top: 2%;
      `}
`;

export const Flex = styled.div`
  display: flex;
  flex: 3;
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
      box-shadow: 2px 4px 9px -1px #000;
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

  &:hover {
    background: #9cb8b8;
    border-radius: 5px;
  }
`;

export const Input = styled.input`
  &:hover {
    background: #9faab7;
  }
  &:checked {
    background: #40e0d0;
  }
`;
