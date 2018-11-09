import React, { Component } from 'react';
import { Header } from './styles/flex';
import { Arrow } from './styles/home';

import Properties from './Components/properties';
import Grid from './Components/grid';
import './App.scss';

class App extends Component {
  state = {
    flex: true,
    title: 'Flex Box Playground'
  };
  render() {
    const { flex, title } = this.state;
    return (
      <>
        <Header>{title}</Header>
        {flex ? (
          <>
            <Arrow primary onClick={() => this.setState({ flex: !flex, title: 'Grid Playground' })}>
              >
            </Arrow>
              <Properties />
          </>
        ) : (
          <>
            <Arrow secondary onClick={() => this.setState({ flex: !flex, title: 'Flex Box Playground' })}>
              {`<`}
            </Arrow>
            <Grid />
          </>
        )}
      </>
    );
  }
}

export default App;
