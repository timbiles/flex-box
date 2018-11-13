import React, { Component } from 'react';
import { Grid, SideNav, Main, Cont } from '../styles/gridStyles';
import {Btn} from '../styles/flex';
import Loop from './loop';

class grid extends Component {
    state = {
        number: 4
    }

    edit = (e, value) => {
        let arr = []
        for(let i=1; i<=e; i++){
            arr.push('1fr')
        }
        this.setState({[value]: arr.join(' ')})
    }

  render() {
      const {number, columns, rows} = this.state
      console.log(this.state)
    return (
      <>
        <Grid>
          <SideNav>
              <div>Number of Columns
                  <input type="number" defaultValue={2}
                  onChange={e => this.edit(e.target.value, 'columns')}
                  />
              </div>
              <div>Number of Rows
                  <input type="number" defaultValue={2}
                  onChange={e => this.edit(e.target.value, 'rows')}                                  
                  />
              </div>
            <Btn grid onClick={() => this.setState({number: number + 1})}>Add</Btn>
            <Btn grid onClick={() => this.setState({number: number -1})}>Remove</Btn>
          </SideNav>
          <Main columns={columns && columns} rows={rows && rows}>
            <Loop number={number} type='grid'/>
          </Main>
        </Grid>
      </>
    );
  }
}

export default grid;
