import React, { Component } from 'react';
import { Header } from './styles/flex';
import { Arrow } from './styles/home'

import Properties from './Components/properties';
import Grid from './Components/grid';
import './App.scss';

class App extends Component {
  state = {
    flex: true
  }
  render() {
    const {flex} = this.state
    return (
      <>
        <Header>Flex Box Playground</Header> 
       {flex ? 
       <>
      <Arrow onClick={() => this.setState({flex: !flex})}>></Arrow>     
          <Properties />
          </>
          :
          <Grid />
      } 
      </>
    );
  }
}

export default App;
