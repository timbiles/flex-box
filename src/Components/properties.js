import React, { Component } from 'react';
import { Container, Flex, P, Btn, Input } from '../styles/flex';
import { Modal, Section, Pre } from '../styles/modal';
import flex from '../data/flex.json';

class properties extends Component {
  state = {
    number: 4,
    display: false
  };

  componentDidMount() {
    this.setState(flex);
  }

  changeState = (e, val, name) => {
    this.setState({ [name]: { ...val, value: e.target.value } }, () => {
      this.state.wrap.value === 'nowrap' &&
        this.state.number > 8 &&
        this.setState({
          number: 8
        });
    });
  };

  map = (val, name) => {
    return (
      <Container secondary>
        <h2>{val && val.name}</h2>
        {val &&
          val.arr.map((e, i) => {
            return (
              <Container key={i}>
                <Input
                  name={name}
                  type="radio"
                  value={e}
                  defaultChecked={i === 0 && true}
                  onChange={e => this.changeState(e, val, name)}
                />
                <label htmlFor="">{e}</label>
              </Container>
            );
          })}
      </Container>
    );
  };

  pLoop = num => {
    const { width, height } = this.state;
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr.map((e, i) => (
      <P main key={i} width={width && width} height={height}>
        {e}
      </P>
    ));
  };

  handleClose = e => {
    if (e.target.id === 'modal') {
      this.setState({ display: false });
    }
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
    console.log(this.state);

    return (
      <>
        <Container main>
          <Container primary>
            {this.map(direction, 'direction')}
            {this.map(wrap, 'wrap')}
            {this.map(justifyContent, 'justifyContent')}
            {this.map(alignItems, 'alignItems')}
            {this.map(alignContent, 'alignContent')}

            <h2>Quantity</h2>
            <Container third>
              <Btn onClick={() => this.setState( number !== 1 ? { number: number - 1 } : null)}>-</Btn>
              {number}
              <Btn
                onClick={() =>
                  this.setState(
                    wrap.value === 'nowrap' && number < 8
                      ? { number: number + 1 }
                      : wrap.value === 'nowrap' && number > 8
                      ? { number: 8 }
                      : wrap.value !== 'nowrap'
                      ? { number: number + 1 }
                      : null
                  )
                }
              >
                +
              </Btn>
            </Container>
            <h2>Size (px)</h2>
            <Container third>
              <P secondary>Width</P>
              <input
                type="number"
                onChange={e => this.setState({ width: e.target.value + 'px' })}
              />
            </Container>
            <Container third>
              <P secondary>Height</P>
              <input
                type="number"
                onChange={e => this.setState({ height: e.target.value + 'px' })}
              />
            </Container>
            <Container secondary>
              <Btn onClick={() => this.setState({ display: !display })}>
                Get Code
              </Btn>
              <Modal
                display={display ? 'block' : 'none'}
                id="modal"
                onClick={e => this.handleClose(e)}
              >
                <Section>
                  <Pre>{`
.container {
    display: flex;
    flex-direction: ${direction && direction.value};
    wrap: ${wrap && wrap.value};
    justify-content: ${justifyContent && justifyContent.value};
    align-items: ${alignItems && alignItems.value};
    alignt-content: ${alignContent && alignContent.value};
}
                `}</Pre>
                </Section>
              </Modal>
            </Container>
          </Container>
          <Flex
            direction={direction && direction.value}
            wrap={wrap && wrap.value}
            justifyContent={justifyContent && justifyContent.value}
            alignItems={alignItems && alignItems.value}
            alignContent={alignContent && alignContent.value}
            width={wrap && wrap.value === 'nowrap' ? 'auto' : '500px'}
            height={wrap && wrap.value === 'nowrap' ? 'auto' : '500px'}
          >
            {this.pLoop(number)}
          </Flex>
        </Container>
      </>
    );
  }
}

export default properties;
