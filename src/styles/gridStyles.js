import styled, { css } from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
}
`;

export const SideNav = styled.div`
  display: inline-grid;
  grid-template-rows: 25% repeat(3, 30px);
  grid-template-columns: 0.5fr;
  grid-row-gap: 10px;
`;

export const Main = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: ${props => (props.columns ? props.columns : '1fr 1fr')};
  grid-template-rows: ${props => (props.rows ? props.rows : '1fr 1fr')};  
  grid-gap: 10px;
`;

export const Cont = styled.div`
  border: 1px solid grey;
`;
