import React from 'react';
import { Container, Box } from '../styles/gridStyles';
import { Modal } from '../styles/modal';

const arrows = props => {
  return (
    <Modal
      id={props.id}
      display={props.display ? 'block' : 'none'}
      onClick={e => props.handleClose(e, 'arrowModal', 'arrowDisplay')}
    >
      <Container third>
        <Box main> ↑ </Box>
        <Box secondary> ← </Box>
        <Box secondary> ↓ </Box>
        <Box secondary> → </Box>
      </Container>
    </Modal>
  );
};

export default arrows;
