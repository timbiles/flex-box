import React, { Component } from 'react';
import { Container, Flex, Pa, Btn, Input, Styles } from '../styles/flex';
import { Modal, Section, Pre } from '../styles/modal';
import flex from '../data/flex.json';
import Loop from './loop';
import Icon from './icon';

class properties extends Component {
  state = {
    number: 4,
    display: false,
    widthUnit: 'px',
    heightUnit: 'px',
    paddingUnit: '%',
    padding: '5%'
  };

  componentDidMount() {
    this.setState(flex);
  }

  changeState = (e, val, name) => {
    this.setState({ [name]: { ...val, value: e.target.value } }, () => {
      this.state.wrap.value === 'nowrap' && this.state.number > 8
        ? this.setState({
            number: 8
          })
        : this.state.direction.value === 'column'
        ? this.setState({ padding: '3%' })
        : this.state.direction.value === 'column-reverse'
        ? this.setState({ padding: '3%' })
        : this.setState({ padding: '5%' });
    });
  };

  map = (val, name) => {
    return (
      <Container secondary>
        <h2>{val && val.name}</h2>
        {val &&
          val.arr.map((e, i) => {
            return (
              <Container key={i} >
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

  handleClose = e => {
    if (e.target.id === 'modal') {
      this.setState({ display: false });
    }
  };

  changeSize = (unit, str, measure) => {
    const { padding } = this.state;
    return (
      <Container third >
        <Pa secondary>{str.charAt(0).toUpperCase() + str.slice(1)}</Pa>
        <Input
          secondary
          type="number"
          placeholder={str === 'padding' ? padding : 'auto'}
          onChange={e => this.setState({ [str]: e.target.value + measure })}
        />
        <select
          name={str}
          onChange={e =>
            this.setState({
              measure: e.target.value,
              [str]: this.state[str].replace(/\D/g, '') + e.target.value
            })
          }
        >
          {str === 'padding' ? (
            <>
              <option value="%">%</option>
              <option value="px">px</option>
              <option value="em">em</option>
              <option value="cm">cm</option>
            </>
          ) : (
            <>
              <option value="px">px</option>
              <option value="em">em</option>
              <option value="%">%</option>
              <option value="cm">cm</option>
            </>
          )}
        </select>
      </Container>
    );
  };

  render() {
    const {
      direction,
      wrap,
      justifyContent,
      alignItems,
      alignContent,
      number,
      display,
      width,
      height,
      padding,
      widthUnit,
      heightUnit,
      paddingUnit
    } = this.state;

    return (
      <>
        <Container main>
          <Container primary>
            <Styles height="50vh">
              <Pa header>Properties</Pa>
              {this.map(direction, 'direction')}
              {this.map(wrap, 'wrap')}
              {this.map(justifyContent, 'justifyContent')}
              {this.map(alignItems, 'alignItems')}
              {this.map(alignContent, 'alignContent')}
            </Styles>

            <Container secondary>
              <h2>Quantity</h2>
              <Container third>
                <Btn
                  color="#EFC7C2"
                  width="max-content"
                  onClick={() =>
                    this.setState(number !== 1 ? { number: number - 1 } : null)
                  }
                >
                  -
                </Btn>
                {number}
                <Btn
                  color="#94bfbe"
                  // 8DA7BE
                  width="max-content"
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
            </Container>
            <Container secondary>
              <h2> Box Size</h2>
              {this.changeSize(width, 'width', widthUnit)}
              {this.changeSize(height, 'height', heightUnit)}
              {this.changeSize(padding, 'padding', paddingUnit)}
            </Container>

            <Container secondary>
              <Container third>
                <Btn code onClick={() => this.setState({ display: !display })}>
                  Get Code
                </Btn>
              </Container>

              <Icon />
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

.box {
    height: ${width || 'auto'}
    width: ${height || 'auto'}
    padding: ${padding}
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
            width={wrap && wrap.value === 'nowrap' ? 'auto' : '50vw'}
            height={wrap && wrap.value === 'nowrap' ? 'auto' : '50vh'}
          >
            <Loop
              type="flex"
              number={number}
              width={width}
              height={height}
              padding={padding}
            />
          </Flex>
        </Container>
      </>
    );
  }
}

export default properties;
