import React, { Component } from 'react';
import { Header } from './styles/flex';
import { Arrow, Main } from './styles/home';

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
      <Main>
        <Header>
          {title}
          {flex ? (
            <Arrow
              primary
              onClick={() =>
                this.setState({ flex: !flex, title: 'Grid Playground' })
              }
            />
          ) : (
            <Arrow
              rotate='rotateY(180deg)'
              secondary
              onClick={() =>
                this.setState({ flex: !flex, title: 'Flex Box Playground' })
              }
            />
          )}
        </Header>
        {flex ? (
            <Properties />
        ) : (
            <Grid />
        )}
      </Main>
    );
  }
}

export default App;
