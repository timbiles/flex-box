import styled, { css } from 'styled-components';

export const Header = styled.div`
  font-family: 'Hind', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 98vw;
  background: linear-gradient(to right, #94bfbe, #709192);
  font-size: 2em;
  border-radius: 5px;
  margin-bottom: 1vh;
`;

export const Container = styled.div`
  display: flex;
  h2 {
        border-bottom: 1px solid #000;
        padding-bottom: 5px;
        margin: 5px 0; 
        width: max-content;
        align-self: center;
        font-weight: 300;
      }

${props =>
  props.main &&
  css`
    max-width: 98vw;
    height: 87vh;
  `}
  ${props =>
    props.primary &&
    css`
      flex-direction: column;
      justify-content: flex-start;
      background: #f4f4f4;
      flex: 1;
      padding-top: 1%;
      overflow: scroll;
      border-radius: 5px 0 0 5px;
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
      flex-shrink: 0;
    `}
    ${props =>
      props.third &&
      css`
        justify-content: center;
        margin-top: 2%;
      `}
`;

export const Styles = styled.div`
  &:not(:hover) {
    height: ${props => props.height};
    overflow: hidden;
    border-radius: 0 0 5px 5px;
    position: relative;
    border-bottom: 2.5px solid rgba(191, 191, 191, 0.4);
    padding: 1%;
    perspective: 400px;
  }
  padding: 1%;

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 90%
    );
    width: 100%;
    height: 10em;
  }
  &:hover:after {
    z-index: -1;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex: 3;
  background: #fff;
  padding: 10px;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 0 5px 5px 0;
  overflow-x: hidden;
`;

export const Pa = styled.p`
  ${props =>
    props.main &&
    css`
      box-shadow: 1px 5px 21px -1px #000;
      background: #f4f4f4;
      border: 1px double rgba(146, 189, 189, 0.5);
      padding: ${props => props.padding || 'auto'};
      width: ${props => props.width || 'auto'};
      max-width: ${props => (1 /props.number)*100 + '%'};
      height: ${props => props.height};
      overflow-y: auto;
    `}
    ${props =>
      props.secondary &&
      css`
        margin-right: 5%;
      `}
    ${props =>
      props.header &&
      css`
        font-size: 2em;
        text-align: center;

        &::first-letter {
          font-size: 2.05em;
        }
      `}
`;

export const Btn = styled.button`
  cursor: pointer;
  width: ${props => props.width};
  padding: 1% 3%;
  margin: 0 5%;
  border-radius: 5px;
  background: ${props => props.color};

  &:hover {
  background: ${props => props.hover ? props.hover : '#9cb8b8'};
  }

  &:focus {
    outline: none;
  }

  ${props =>
    props.grid &&
    css`
      padding: 5%;
    `}

  ${props =>
    props.code &&
    css`
      font-size: 1.3em;
      background: #8da7be;
      color: #fff;
    `}
`;

export const Input = styled.input`
  ${props =>
    props.main &&
    css`
      -webkit-appearance: none;
      width: 13px;
      height: 13px;
      border: 1px solid darkgray;
      border-radius: 50%;
      box-shadow: 0 0 5px 0px #c7c7c7;

      &:hover {
        box-shadow: 0 0 5px 0px #ffa500 inset;
        cursor: pointer;
      }
    `}

  &:checked {
    background: #94bfbe;
  }

  &:focus {
  outline: #94bfbe;
}

  ${props =>
    props.secondary &&
    css`
      width: 50%;
    `}
`;
