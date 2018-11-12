import React, { Component } from 'react';
import { Grid, SideNav, Main, Cont } from '../styles/gridStyles';
import {Btn} from '../styles/flex';

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
              Grid Styles
            <Btn grid onClick={() => this.setState({number: number + 1})}>Add</Btn>
            <Btn grid onClick={() => this.setState({number: number -1})}>Remove</Btn>
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
