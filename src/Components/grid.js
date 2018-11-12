import React, { Component } from 'react';
import { Grid, SideNav, Main, Cont } from '../styles/gridStyles';

class grid extends Component {
    state = {
        number: 4
    }

    gridLoop = () => {
        const {number} = this.state
        const arr = []
        for(let i=1; i<=number; i++){
            arr.push(i)
        }
        return arr.map((e, i) => (
            <Cont key={i}>{e}</Cont>
        ))
    }

  render() {
      const {number} = this.state
    return (
      <>
        <Grid>
          <SideNav>
              Side nav
            <button onClick={() => this.setState({number: number + 1})}>Add</button>
            <button onClick={() => this.setState({number: number -1})}>Remove</button>
          </SideNav>
          <Main>
            {this.gridLoop()}           
          </Main>
        </Grid>
      </>
    );
  }
}

export default grid;
