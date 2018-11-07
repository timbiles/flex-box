import React, { Component } from 'react';

import styled, {css} from 'styled-components';


const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    flex-wrap: ${props => props.wrap};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    align-content: ${props => props.alignContent};  
    
    p & css`
    border: 
    `
`

class properties extends Component {
  state = {
    direction: {
      name: 'flex-direction',
      arr: ['row', 'row-reverse', 'column', 'column-reverse'],
      value: ''
    },
    wrap: {
      name: 'flex-wrap',
      arr: ['nowrap', 'wrap', 'wrap-reverse'],
      value: ''
    },
    justifyContent: {
      name: 'justify-content',
      arr: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly'
      ],
      value: ''
    },
    alignItems: {
      name: 'align-items',
      arr: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      value: ''
    },
    alignContent: {
      name: 'align-content',
      arr: [
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around'
      ],
      value: ''
    }
  };

  map = (val, name) => {
    return (
      <>
        <h2>{val.name}</h2>
        {val.arr.map((e, i) => {
          return (
            <div key={i}>
              <input
                name={name}
                type="radio"
                value={e}
                onChange={e => {
                  this.setState({
                    [name]: { ...val, value: e.target.value }
                  });
                }}
              />
              <label htmlFor="">{e}</label>
            </div>
          );
        })}
      </>
    );
  };
  render() {
    console.log(this.state);
    const {
      direction,
      wrap,
      justifyContent,
      alignItems,
      alignContent
    } = this.state;

    return (
      <div>
        {this.map(direction, 'direction')}
        <br />
        {this.map(wrap, 'wrap')}
        <br />
        {this.map(justifyContent, 'justifyContent')}
        <br />
        {this.map(alignItems, 'alignItems')}
        <br />
        {this.map(alignContent, 'alignContent')}
        <Flex
            direction={direction.value}
            wrap={wrap.value}
            justifyContent={justifyContent.value}
            alignItems={alignItems.value}
        >
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
        </Flex>
      </div>
    );
  }
}

export default properties;
