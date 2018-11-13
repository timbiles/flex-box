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
    display: false,
    display2: false,
    rows: '1fr 1fr',
    columns: '1fr 1fr',
    rowGap: '5px',
    columnGap: '5px'
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
      console.log(e.target.id)
    if (e.target.id === 'modal' || e.target.id === 'modal2') {
      this.setState({ display: false, display2: false });
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
      display,
      display2,
      rowGap,
      columnGap
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
            <Container>
              Grid Gap
              <Container>
                <Container>
                  Row
                  <input
                    defaultValue="5"
                    type="number"
                    onChange={e => {
                      console.log('hit');
                      this.setState({ rowGap: e.target.value + 'px' });
                    }}
                  />
                </Container>
                <Container>
                  Column
                  <input
                    defaultValue="5"
                    type="number"
                    onChange={e =>
                      this.setState({ columnGap: e.target.value + 'px' })
                    }
                  />
                </Container>
              </Container>
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
            <Btn onClick={() => this.setState({ display2: !display2 })}>
              Get Optimized Code
            </Btn>
            <Modal
              display={display ? 'block' : 'none'}
              id="modal"
              onClick={e => this.handleClose(e)}
            >
              <Section >
                <Pre>{`
.container {
    display: grid;
    grid-template-columns: ${columns}
    grid-template-rows: ${rows}
    grid-row-gap: ${rowGap}
    grid-column-gap: ${columnGap}   
}
                `}</Pre>
              </Section>
            </Modal>
            <Modal
              display={display2 ? 'block' : 'none'}
              id="modal2"
              onClick={e => this.handleClose(e)}
            >
              <Section >
                <Pre>{`
.container {
    display: grid;
    grid-template-columns: repeat(${columns.split(' ').length}, ${columns.split(' ')[0]})
    grid-template-rows: (${rows.split(' ').length}, ${rows.split(' ')[0]})
    grid-gap: ${rowGap} ${columnGap}
}
                `}</Pre>
              </Section>
            </Modal>
          </SideNav>
          <Main
            columns={columns && columns}
            rows={rows && rows}
            rowGap={rowGap && rowGap}
            columnGap={columnGap && columnGap}
          >
            <Loop number={number} type="grid" />
          </Main>
        </Grid>
      </>
    );
  }
}

export default grid;
