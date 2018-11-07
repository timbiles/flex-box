import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import flex from '../data/flex.json';

const Header = styled.div`
  height: 5vh;
  background: grey;
  font-size: 2em;
`;

const Container = styled.div`
  display: flex;
  height: 95vh;

  ${props =>
    props.primary &&
    css`
      flex-direction: column;
      flex: 1;
    `}
  ${props =>
    props.secondary &&
    css`
      flex-direction: column;
      justify-content: flex-start;
    `}
`;

const Flex = styled.div`
  display: flex;
  flex: 3;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
`;

const P = styled.p`
  border: 1px solid #000;
  padding: 5%;
`;

class properties extends Component {
  state = {
      number: 4
  };

  componentDidMount() {
    this.setState(flex);
  }

  map = (val, name) => {
    return (
      <Container secondary>
        <h2>{val && val.name}</h2>
        {val &&
          val.arr.map((e, i) => {
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

  pLoop = (num) => {
      console.log(num)
      const arr = []
    for(let i = 1; i<=num; i++){
      arr.push(i)
    }
    return arr.map((e, i) => <P key={i}>{e}</P>)
}

  render() {
    const {
      direction,
      wrap,
      justifyContent,
      alignItems,
      alignContent,
      number
    } = this.state;


    return (
      <>
        <Header>
            Flex Box Playground
        </Header>
        <Container>
          <Container primary>
            {this.map(direction, 'direction')}
            {this.map(wrap, 'wrap')}
            {this.map(justifyContent, 'justifyContent')}
            {this.map(alignItems, 'alignItems')}
            {this.map(alignContent, 'alignContent')}
            <button onClick={() => this.setState({number: number + 1})}>Add Number</button>
          </Container>
          <Flex
            direction={direction && direction.value}
            wrap={wrap && wrap.value}
            justifyContent={justifyContent && justifyContent.value}
            alignItems={alignItems && alignItems.value}
          >
          {this.pLoop(number)}
          </Flex>
        </Container>
      </>
    );
  }
}

export default properties;
