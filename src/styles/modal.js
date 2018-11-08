import styled, { css } from 'styled-components';

export const Modal = styled.div`
  display: ${props => props.display};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(171, 171, 171, .6);
`;

export const Section = styled.div`
    position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: white;
  width: auto;
  height: auto;
  padding: 1% 10%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Pre = styled.pre`
    text-align: left;
`;