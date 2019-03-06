import React, { Component } from 'react';
import {
  Grid,
  SideNav,
  Main,
  Container,
  P,
  Input,
  Counter
} from '../styles/gridStyles';
import { Btn, Pa, Styles } from '../styles/flex';
import { Modal, Section, Pre } from '../styles/modal';
import Loop from './loop';
import Arrows from './arrows';
import Icon from './icon';
import Dots from './dots';

class grid extends Component {
  state = {
    number: 4,
    columnCount: 2,
    rowCount: 2,
    rowStart: 1,
    colStart: 1,
    rowEnd: 2,
    colEnd: 2,
    rows: '1fr 1fr',
    columns: '1fr 1fr',
    rowGap: '5px',
    columnGap: '5px',
    num: '',
    boxShadow: false,
    display: false,
    display2: false,
    dots: false,
    dots2: false,
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

    if (+e.target.id !== num) {
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

  edit = (value, str) => {
    let arr = [];
    let temp;
    if (str === 'sub') {
      temp = this.state[value].split(' ');
      temp.splice(-1);
      this.setState({ [value]: temp.join(' ') });
    } else {
      arr = [...[this.state[value]], '1fr'].join(' ');
      this.setState({ [value]: arr });
    }
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
          color="#EFC7C2"
          hover="#dbb6b1"
          width="50%"
          onClick={() => {
            e > 1 &&
              this.setState({ [f]: e - 1 }, () => {
                this.edit(g, 'sub');
              });
          }}
        >
          -
        </Btn>
        {e}
        <Btn
          color="#94bfbe"
          width="50%"
          onClick={() => {
            this.state[f] <10 &&
            this.setState({ [f]: e + 1 }, () => {
              this.edit(g);
            });
          }}
        >
          +
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

  loop = (state, title, str) => {
    const c = state.split(' ');
    let num;
    let unit = 'fr';

    return c.map((e, i) => {
      return (
        <Counter key={i}>
          <p>
            {title} {i + 1}
          </p>
          <input
            type="number"
            value={c[i].replace(/\D/g, '')}
            onChange={e => {
              num = e.target.value + c[i].replace(/[0-9]/g, '') || unit;
              c[i] = num;
              this.setState({ [str]: c.join(' ') });
            }}
          />
          <select
            name={title}
            onChange={e => {
              unit = e.target.value;
              num = c[i].replace(/\D/g, '') + unit;
              c[i] = num;
              this.setState({ [str]: c.join(' ') });
            }}
          >
            <option value="fr">fr</option>
            <option value="%">%</option>
            <option value="px">px</option>
            <option value="em">em</option>
            <option value="cm">cm</option>
            <option value="auto">auto</option>
          </select>
        </Counter>
      );
    });
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
      colEnd,
      dots,
      dots2
    } = this.state;



    const find = str => {
      let arr = str.split(' ');

      for (let i = 0; i < arr.length - 1; i++) {
        let count = 1;
        while (arr[i] === arr[i + 1]) {
          count++;
          arr.splice(i, 1);
        }
        count === 1
          ? (arr[i] = arr[i])
          : arr.splice(i, 1, `repeat(${count}, ${arr[i]})`);
      }
      return arr.join(' ');
    };

    return (
      <>
        <Grid>
          <SideNav>
            <Styles height="52vh">
              <Pa header>Properties</Pa>
              <Container main>
                <h3>Number of Columns ↔</h3>
                {this.buttons(columnCount, 'columnCount', 'columns')}
                {dots && this.loop(columns, 'Column', 'columns')}
                <Dots hit={() => this.setState({ dots: !dots })} />
              </Container>
              <Container main>
                <h3>Number of Rows ↕</h3>
                {this.buttons(rowCount, 'rowCount', 'rows')}
                {dots2 && this.loop(rows, 'Row', 'rows')}
                <Dots hit={() => this.setState({ dots2: !dots2 })} />
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
                <Btn
                  color="#EFC7C2"
                  hover="#dbb6b1"
                  width="50%"
                  grid
                  onClick={() => this.setState(
                    number >1 ?
                    { number: number - 1 }
                    : null
                  )}
                >
                  -
                </Btn>
                {number}
                <Btn
                  color="#94bfbe"
                  width="50%"
                  grid
                  onClick={() => this.setState(
                    number <25 ?
                    { number: number + 1 }
                    : null
                  )}
                >
                  +
                </Btn>
              </Container>
            </Container>
            <Container main>
              <Btn code onClick={() => this.setState({ display: !display })}>
                Get Code
              </Btn>
              <Btn code onClick={() => this.setState({ display2: !display2 })}>
                Get Optimized Code
              </Btn>
            </Container>
            <Container main>
              <Icon />
            </Container>
            <Modal
              display={display ? 'block' : 'none'}
              id="modal"
              onClick={e => this.handleClose(e, 'modal', 'display')}
            >
              <Section>
                <Pre>{`
.container {
    display: grid;
    grid-template-columns: ${columns};
    grid-template-rows: ${rows};
    grid-row-gap: ${rowGap};
    grid-column-gap: ${columnGap};
}
${num  || num === 0 ?
`.box {
      grid-row-start: ${rowStart};
      grid-row-end: ${rowEnd};
      grid-column-start: ${colStart};
      grid-column-end: ${colEnd};
  }`
  : ''
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
    grid-template-columns: ${find(columns)};
    grid-template-rows: ${find(rows)};
    grid-gap: ${rowGap} ${columnGap};
}

${num || num === 0 ?
  `.box {
    grid-area: ${rowStart}/${colStart}/${rowEnd}/${colEnd}
}
` : ''}
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
            display={this.props.arrowDisplay ? 'block' : 'none'}
            id="arrowModal"
            handleClose={this.props.handleClose}
          />
        </Grid>
      </>
    );
  }
}

export default grid;
