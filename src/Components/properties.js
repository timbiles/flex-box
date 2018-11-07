import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import flex from '../data/flex.json';

const Container = styled.div`
  display: flex;

  ${props => props.primary && css`
    width: 100vw;
    flex-direction: column;
    justify-content: flex-start;
  `}
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
`;

const P = styled.p`
  border: 1px solid #000;
`;

class properties extends Component {
    state = {}

    componentDidMount() {
        this.setState(flex)
        console.log('hit')
    }

  map = (val, name) => {
      console.log(this.state)
      
    return (
      <Container primary>
        <h2>{val && val.name}</h2>
        {val && val.arr.map((e, i) => {
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
      </Container>
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
      <>
        <Container>
          {this.map(direction, 'direction')}
          {this.map(wrap, 'wrap')}
          {this.map(justifyContent, 'justifyContent')}
          {this.map(alignItems, 'alignItems')}
          {this.map(alignContent, 'alignContent')}
        </Container>
        <Flex
          direction={direction && direction.value}
          wrap={wrap && wrap.value}
          justifyContent={justifyContent && justifyContent.value}
          alignItems={alignItems && alignItems.value}
        >
          <P>1</P>
          <P>2</P>
          <P>3</P>
          <P>4</P>
        </Flex>
      </>
    );
  }
}

export default properties;
