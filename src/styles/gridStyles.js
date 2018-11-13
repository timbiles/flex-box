import styled, { css } from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
}
`;

export const SideNav = styled.div`
  display: inline-grid;
  grid-template-rows: repeat(2, .25fr) 30px 30px;
  grid-template-columns: 0.75fr;
  grid-row-gap: 10px;
`;

export const Main = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: ${props => (props.columns ? props.columns : '1fr 1fr')};
  grid-template-rows: ${props => (props.rows ? props.rows : '1fr 1fr')};  
  grid-gap: 10px;
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
`

export const Cont = styled.div`
  border: 1px solid grey;
`;
