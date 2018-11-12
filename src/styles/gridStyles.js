import styled, { css } from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
}
`;

export const SideNav = styled.div`
  display: inline-grid;
  grid-template-rows: 25% 30px 30px;
  grid-template-columns: 0.5fr;
  grid-row-gap: 10px;
`;

export const Main = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const Cont = styled.div`
  border: 1px solid grey;
`;
