import React, { Component } from 'react';
import { Header, Container, Flex, P, Btn, Pre } from '../styles/flex';
import flex from '../data/flex.json';

class properties extends Component {
  state = {
    number: 4,
    display: false
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
                  defaultChecked={i === 0 && true}
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

  pLoop = num => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr.map((e, i) => <P key={i}>{e}</P>);
  };

  render() {
    const {
      direction,
      wrap,
      justifyContent,
      alignItems,
      alignContent,
      number,
      display
    } = this.state;
    console.log(display)

    return (
      <>
        <Header>Flex Box Playground</Header>
        <Container main>
          <Container primary>
            {this.map(direction, 'direction')}
            {this.map(wrap, 'wrap')}
            {this.map(justifyContent, 'justifyContent')}
            {this.map(alignItems, 'alignItems')}
            {this.map(alignContent, 'alignContent')}
            <Container third>
              <Btn onClick={() => this.setState({ number: number - 1 })}>-</Btn>
              {number}
              <Btn onClick={() => this.setState({ number: number + 1 })}>+</Btn>
            </Container>
            <Container secondary>
                <Btn onClick={() => this.setState({display: !display})}>
                    Get Code
                </Btn>
                <Pre display={display ? 'block' : 'none'}>{`
.container {
    display: flex;
    flex-direction: ${direction && direction.value};
    wrap: ${wrap && wrap.value};
    justify-content: ${justifyContent && justifyContent.value};
    align-items: ${alignItems && alignItems.value};
    alignt-content: ${alignContent && alignContent.value};
}
                `}</Pre>
            </Container>
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
