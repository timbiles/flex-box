import React, { Component } from 'react';
import { Grid, SideNav, Main, Container, Input } from '../styles/gridStyles';
import { Btn } from '../styles/flex';
import { Modal, Section, Pre } from '../styles/modal';
import Loop from './loop';
import Arrows from './arrows';

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
    const {colStart, colEnd, rowStart, rowEnd, shift} = this.state
    console.log(e.key)
    
    if(e.key === 'Shift') {
        this.setState({shift: true})
    } else if(e.key === 'ArrowLeft' && !shift){
        this.setState({colStart: colStart -1, colEnd: colEnd -1})
    } else if(e.key === 'ArrowRight' && !shift){
        this.setState({colStart: colStart +1, colEnd: colEnd + 1})
    } else if(e.key === 'ArrowUp' && !shift){
        this.setState({rowStart: rowStart -1, rowEnd: rowEnd - 1})
    } else if(e.key === 'ArrowDown' && !shift){
        this.setState({rowStart: rowStart +1, rowEnd: rowEnd +1})
    } else if(e.key === 'ArrowRight' && shift){
        this.setState({colEnd: colEnd +1})
    } else if(e.key === 'ArrowLeft' && shift && colEnd > colStart+1){
        this.setState({colEnd: colEnd -1})
    } else if(e.key === 'ArrowLeft' && shift && colEnd <= colStart+1){
        this.setState({colStart: colStart -1})
    } else if(e.key === 'ArrowDown' && shift){
        this.setState({rowEnd: rowEnd +1})
    } else if(e.key === 'ArrowUp' && shift && rowEnd > rowStart+1){
        this.setState({rowEnd: rowEnd -1})
    } else if(e.key === 'ArrowUp' && shift && rowEnd <= rowStart+1){
        this.setState({rowStart: rowStart -1})
    }
}

keyUp = e => {
    e.key === 'Shift' && this.setState({shift: false})
}

  handleClick = e => {
    const { columns } = this.state;
    let temp = +e.target.id + 1;
    let c = columns.split(' ').length;
    let count = 1;

    while (temp > c) {
      temp -= c;
      count++;
    }

    this.setState({
      num: +e.target.id,
      colStart: temp,
      rowStart: count,
      colEnd: temp + 1,
      rowEnd: count + 1,
      boxShadow: true
    });
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
    const { rowStart, colStart, rowEnd, colEnd } = this.state;
    const newVal =
      g === 'rowEnd' && f < rowStart
        ? rowStart + 1
        : g === 'colEnd' && f < colStart
        ? colStart + 1
        : f;
    return (
      <Container>
        {e}
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
                  {this.inputs('Row Start', rowStart, 'rowStart')}
                  {this.inputs('Row End', rowEnd, 'rowEnd')}
                </Container>
                <Container secondary>
                  {this.inputs('Column Start', colStart, 'colStart')}
                  {this.inputs('Column End', colEnd, 'colEnd')}
                </Container>
              </Container>
            </Container>
            <Container primary>
              {number}
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
            display={arrowDisplay}
            id="arrowModal"
            handleClose={this.handleClose}
          />
        </Grid>
      </>
    );
  }
}

export default grid;