import styled, { css, keyframes } from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
}
`;

export const SideNav = styled.div`
  display: inline-grid;
  grid-template-rows: repeat(4, 0.2fr) repeat(3, 30px);
  grid-template-columns: 0.75fr;
  grid-row-gap: 10px;
`;

export const Main = styled.div`
  height: 90vh;
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
        bottom: 2%;
        right: 2%;
        padding: 2%;
        background: #fff;
        border-radius: 5px;
        grid-template-columns: 1fr 1fr;
        animation: ${Entrance} .8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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

export const Input = styled.input``;
export const Text = styled.p`
  font-size: 1rem;
`;

export const Entrance = keyframes`
0% {
    transform: translateX(-20px) translateY(-20px);
    opacity: 0;
    }
    100% {
    transform: translateX(0) translateY(0);
    opacity: 1;
    }
`;
