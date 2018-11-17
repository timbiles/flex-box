import React, { Component } from 'react';
import { Grid, SideNav, Main, Container, P, Input } from '../styles/gridStyles';
import { Btn, Pa, Styles, Icon } from '../styles/flex';
import { Modal, Section, Pre } from '../styles/modal';
import Loop from './loop';
import Arrows from './arrows';
import Icons from './icon';

class grid extends Component {
  state = {
    number: 4,
    columnCount: 2,
    rowCount: 2,
    display: false,
    display2: false,
    arrowDisplay: true,
    rows: '1fr 1fr',
    columns: '1fr 1fr',
    rowGap: '5px',
    columnGap: '5px',
    rowStart: 1,
    colStart: 1,
    rowEnd: 2,
    colEnd: 2,
    num: '',
    boxShadow: false,
    shift: false
  };

  keyPress = e => {
    const { colStart, colEnd, rowStart, rowEnd, shift } = this.state;

    if (e.key === 'Shift') {
      this.setState({ shift: true });
    } else if (e.key === 'ArrowLeft' && !shift && colStart > 1) {
      this.setState({ colStart: colStart - 1, colEnd: colEnd - 1 });
    } else if (e.key === 'ArrowRight' && !shift) {
      this.setState({ colStart: colStart + 1, colEnd: colEnd + 1 });
    } else if (e.key === 'ArrowUp' && !shift && rowStart > 1) {
      this.setState({ rowStart: rowStart - 1, rowEnd: rowEnd - 1 });
    } else if (e.key === 'ArrowDown' && !shift) {
      this.setState({ rowStart: rowStart + 1, rowEnd: rowEnd + 1 });
    } else if (e.key === 'ArrowRight' && shift) {
      this.setState({ colEnd: colEnd + 1 });
    } else if (e.key === 'ArrowLeft' && shift && colEnd > colStart + 1) {
      this.setState({ colEnd: colEnd - 1 });
    } else if (e.key === 'ArrowLeft' && shift && colEnd <= colStart + 1) {
      this.setState({ colStart: colStart - 1 });
    } else if (e.key === 'ArrowDown' && shift) {
      this.setState({ rowEnd: rowEnd + 1 });
    } else if (e.key === 'ArrowUp' && shift && rowEnd > rowStart + 1) {
      this.setState({ rowEnd: rowEnd - 1 });
    } else if (e.key === 'ArrowUp' && shift && rowEnd <= rowStart + 1) {
      this.setState({ rowStart: rowStart - 1 });
    }
  };

  keyUp = e => {
    e.key === 'Shift' && this.setState({ shift: false });
  };

  handleClick = e => {
    const { columns, num } = this.state;
    let temp = +e.target.id + 1;
    let c = columns.split(' ').length;
    let count = 1;

    while (temp > c) {
      temp -= c;
      count++;
    }

    if (e.target.id != num) {
      this.setState({
        num: +e.target.id,
        colStart: temp,
        rowStart: count,
        colEnd: temp + 1,
        rowEnd: count + 1,
        boxShadow: true
      });
    }
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

  handleClose = (e, f, g) => {
    if (e.target.id === f) {
      this.setState({ [g]: false });
    }
  };

  buttons = (e, f, g) => {
    return (
      <Container primary>
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
      </Container>
    );
  };

  inputs = (e, f, g) => {
    const { rowStart, colStart, rowEnd, colEnd } = this.state;
    console.log(g, f)
    const newVal =
      g === 'rowEnd' && f < rowStart
        ? rowStart + 1
        : g === 'colEnd' && f < colStart
        ? colStart + 1
        : f;
    return (
      <Container >
        <P>{e}</P>
        {g.includes('Gap') ? (
          <Input
            defaultValue={newVal}
            type="number"
            onChange={e => this.setState({ [g]: e.target.value + 'px' })}
          />
        ) : (
          <Input
            value={newVal}
            type="number"
            onChange={e => {
              this.setState(
                +e.target.value > this.state[g] && g === 'rowStart'
                  ? {
                      [g]: +e.target.value,
                      rowEnd: rowStart + 1
                    }
                  : +e.target.value > this.state[g] && g === 'colStart'
                  ? {
                      [g]: +e.target.value,
                      colEnd: colStart + 1
                    }
                  : g === 'rowStart' && +e.target.value >= 1
                  ? {
                      [g]: +e.target.value,
                      rowEnd: rowEnd - 1
                    }
                  : g === 'colStart' && +e.target.value >= 1
                  ? {
                      [g]: +e.target.value,
                      colEnd: colEnd - 1
                    }
                  : null
              );
            }}
          />
        )}
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
      arrowDisplay,
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
          
          <SideNav >
            <Styles height='52vh'>                 
          <Pa header>Properties</Pa>            
            <Container main>
              <h3>Number of Columns</h3>
              {this.buttons(columnCount, 'columnCount', 'columns')}
            </Container>
            <Container main>
              <h3>Number of Rows</h3>
              {this.buttons(rowCount, 'rowCount', 'rows')}
            </Container>
            <Container main>
             <h3>Grid gap</h3>
              <Container>
                <Container secondary>
                  {this.inputs('Row', 5, 'rowGap')}
                  {this.inputs('Column', 5, 'columnGap')}
                </Container>
              </Container>
            </Container>
            <Container main>
              <h3>Grid Line Numbers</h3>
              <Container>
                <Container secondary>
                  {this.inputs('Row Start', rowStart, 'rowStart')}
                  {this.inputs('Row End', rowEnd, 'rowEnd')}
                </Container>
                <Container secondary>
                  {this.inputs('Column Start', colStart, 'colStart')}
                  {this.inputs('Column End', colEnd, 'colEnd')}
                </Container>
              </Container>
            </Container>
          </Styles>                        
           <Container main>

            <h3>Quantity</h3>
            <Container primary>
            
              <Btn grid onClick={() => this.setState({ number: number - 1 })}>
                -
              </Btn>
              {number}              
              <Btn grid onClick={() => this.setState({ number: number + 1 })}>
                +
              </Btn>
              
            </Container>
           </Container>

            <Btn code onClick={() => this.setState({ display: !display })}>
              Get Code
            </Btn>
            <Btn code onClick={() => this.setState({ display2: !display2 })}>
              Get Optimized Code
            </Btn>
            <Icons/>
            <Modal
              display={display ? 'block' : 'none'}
              id="modal"
              onClick={e => this.handleClose(e, 'modal', 'display')}
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
              onClick={e => this.handleClose(e, 'modal2', 'display2')}
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
              keyPress={this.keyPress}
              keyUp={this.keyUp}
            />
          </Main>
          <Arrows
            display={arrowDisplay ? 'block' : 'none'}
            id="arrowModal"
            handleClose={this.handleClose}
          />
        </Grid>
      </>
    );
  }
}

export default grid;
