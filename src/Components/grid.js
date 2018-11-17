import React, { Component } from 'react';
import { Grid, SideNav, Main, Container, P, Input } from '../styles/gridStyles';
import { Btn, Pa, Styles, Icon } from '../styles/flex';
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
            <a href="https://github.com/timbiles/flex-box" target="blank">
          <Icon viewBox="0 0 128 128">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
            />
            <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
          </Icon>
        </a>
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
