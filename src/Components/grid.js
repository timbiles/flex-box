import React, { Component } from 'react';
import { Grid, SideNav, Main, Container } from '../styles/gridStyles';
import { Btn } from '../styles/flex';
import { Modal, Section, Pre } from '../styles/modal';
import Loop from './loop';

class grid extends Component {
  state = {
    number: 4,
    columnCount: 2,
    rowCount: 2,
    display: false
  };

  edit = value => {
    const { columnCount, rowCount } = this.state;
    let arr = [];
    let e = value === 'columns' ? columnCount : rowCount;

    for (let i = 1; i <= e; i++) {
      arr.push('1fr');
    }
    this.setState({ [value]: arr.join(' ') });
  };

  handleClose = e => {
    if (e.target.id === 'modal') {
      this.setState({ display: false });
    }
  };

  buttons = (e, f, g) => {
    return (
      <Container primary>
        {e}
        <Btn
          onClick={() => {
            this.setState({ [f]: e + 1 }, () => {
              this.edit(g);
            });
          }}
        >
          Up
        </Btn>
        <Btn
          onClick={() => {
            e > 1 &&
              this.setState({ [f]: e - 1 }, () => {
                this.edit(g);
              });
          }}
        >
          Down
        </Btn>
      </Container>
    );
  };

  render() {
    const {
      number,
      columns,
      rows,
      columnCount,
      rowCount,
      display
    } = this.state;
    return (
      <>
        <Grid>
          <SideNav>
            <Container>
              Number of Columns
              {this.buttons(columnCount, 'columnCount', 'columns')}
            </Container>
            <Container>
              Number of Rows
              {this.buttons(rowCount, 'rowCount', 'rows')}
            </Container>
            <Container primary>
              <Btn grid onClick={() => this.setState({ number: number + 1 })}>
                Add
              </Btn>
              <Btn grid onClick={() => this.setState({ number: number - 1 })}>
                Remove
              </Btn>
            </Container>
            <Btn onClick={() => this.setState({ display: !display })}>
              Get Code
            </Btn>
            <Modal
              display={display ? 'block' : 'none'}
              id="modal"
              onClick={e => this.handleClose(e)}
            >
              <Section>
                <Pre>{`
.container {
    display: grid;
}
                `}</Pre>
              </Section>
            </Modal>
          </SideNav>
          <Main columns={columns && columns} rows={rows && rows}>
            <Loop number={number} type="grid" />
          </Main>
        </Grid>
      </>
    );
  }
}

export default grid;
