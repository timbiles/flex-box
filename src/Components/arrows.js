import React from 'react';
import { Container, Box, Text } from '../styles/gridStyles';
import { Modal } from '../styles/modal';

const arrows = ({id, display, handleClose}) => {
  return (
    <Modal
      id={id}
      display={display}
      onClick={e => handleClose(e, 'arrowModal', 'arrowDisplay')}
    >
      <Text main>
          Click on a box to move it around with the arrow keys!
      </Text>
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
