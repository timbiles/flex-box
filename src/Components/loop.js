import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Cont } from '../styles/gridStyles';
import { P } from '../styles/flex';

export default class Loop extends Component {

   
    
  render() {
    const {
      number,
      width,
      height,
      rowStart,
      rowEnd,
      colStart,
      colEnd,
      num,
      boxShadow
    } = this.props;

    const arr = [];
    for (let i = 1; i <= number; i++) {
      arr.push(i);
    }

    return arr.map((e, i) => {
      return this.props.type === 'grid' ? (
        <Cont
          key={i}
          id={i}
          onClick={el => this.props.handleClick(el)}
          onKeyDown={e => this.props.keyPress(e)}
          onKeyUp={e=> this.props.keyUp(e)}
          tabIndex="0"
          rowStart={i === num && rowStart}
          colStart={i === num && colStart}
          rowEnd={i === num && rowEnd}
          colEnd={i === num && colEnd}
          boxShadow={i === num && boxShadow && '1px 1px 5px 3px grey'}
          //   onBlur={() => this.setState({ boxShadow: false })}
        >
          {e}
        </Cont>
      ) : (
        <P main key={i} width={width && width} height={height}>
          {e}
        </P>
      );
    });
  }
}
