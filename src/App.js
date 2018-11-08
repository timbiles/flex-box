import React, { Component } from 'react';
import { Header} from './styles/flex';

import Properties from './Components/properties';
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Header>Flex Box Playground</Header>      
          <Properties />
      </>
    );
  }
}

export default App;
