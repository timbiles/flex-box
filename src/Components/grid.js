import React, { Component } from 'react';
import { Grid, SideNav, Main, Container, Input } from '../styles/gridStyles';
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
    columnGap: '5px',
    rowStart: 1,
    colStart: 1,
    rowEnd: 2,
    colEnd: 2,
    num: '',
    boxShadow: false
  };

  handleClick = e => {
    console.log('hit');
    this.setState(
      { num: +e.target.id, boxShadow: !this.state.boxShadow },
      () => {
        console.log(this.state.num);
      }
    );
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
    console.log(e.target.id);
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

  inputs = (e, f, g) => {
    return (
      <Container>
        {e}
        <Input
          defaultValue={f}
          type="number"
          onChange={e => {
            this.setState(
              g.includes('Gap')
                ? { [g]: e.target.value + 'px' }
                : { [g]: +e.target.value }
            );
          }}
        />
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
      columnGap,
      rowStart,
      colStart,
      num,
      boxShadow,
      rowEnd,
      colEnd
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
                {this.inputs('Row', 5, 'rowGap')}
                {this.inputs('Column', 5, 'columnGap')}
              </Container>
            </Container>
            <Container>
              Grid Line Numbers
              <Container>
                  <Container secondary>
                {this.inputs('Row Start', 1, 'rowStart')}
                {this.inputs('Row End', 2, 'rowEnd')}                
                  </Container>
                  <Container secondary>
                {this.inputs('Column Start', 1, 'colStart')}
                {this.inputs('Column End', 2, 'colEnd')}                
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
              <Section>
                <Pre>{`
.container {
    display: grid;
    grid-template-columns: ${columns}
    grid-template-rows: ${rows}
    grid-row-gap: ${rowGap}
    grid-column-gap: ${columnGap}   
}

.box {
    grid-row-start: ${rowStart};
    grid-row-end: ${rowEnd};
    grid-column-start: ${colStart};
    grid-column-end: ${colEnd};
}
                `}</Pre>
              </Section>
            </Modal>
            <Modal
              display={display2 ? 'block' : 'none'}
              id="modal2"
              onClick={e => this.handleClose(e)}
            >
              <Section>
                <Pre>{`
.container {
    display: grid;
    grid-template-columns: repeat(${columns.split(' ').length}, ${
                  columns.split(' ')[0]
                })
    grid-template-rows: (${rows.split(' ').length}, ${rows.split(' ')[0]})
    grid-gap: ${rowGap} ${columnGap}
}

.box {
    grid-area: ${rowStart}/${colStart}/${rowEnd}/${colEnd}
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
            rowStart={rowStart}
            colStart={colStart}
          >
            <Loop
              number={number}
              type="grid"
              rowStart={rowStart}
              colStart={colStart}
              rowEnd={rowEnd}
              colEnd={colEnd}
              handleClick={this.handleClick}
              num={num}
              boxShadow={boxShadow}
            />
          </Main>
        </Grid>
      </>
    );
  }
}

export default grid;
