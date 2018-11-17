import React, { Component } from 'react';
import { Container, Flex, Pa, Btn, Input, Styles, Icon } from '../styles/flex';
import { Modal, Section, Pre } from '../styles/modal';
import flex from '../data/flex.json';
import Loop from './loop';

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

    return (
      <>
        <Container main>
          <Container primary>
            <Styles height='40vh'>      
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
                  onClick={() =>
                    this.setState(number !== 1 ? { number: number - 1 } : null)
                  }
                >
                  -
                </Btn>
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
            </Container>
            <Container secondary>
              <h2>Size (px)</h2>
              <Container third>
                <Pa secondary>Width</Pa>
                <input
                  type="number"
                  onChange={e =>
                    this.setState({ width: e.target.value + 'px' })
                  }
                />
              </Container>
              <Container third>
                <Pa secondary>Height</Pa>
                <input
                  type="number"
                  onChange={e =>
                    this.setState({ height: e.target.value + 'px' })
                  }
                />
              </Container>
            </Container>

            <Container secondary>
              <Container third>
                <Btn code onClick={() => this.setState({ display: !display })}>
                  Get Code
                </Btn>
              </Container>
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
            height={wrap && wrap.value === 'nowrap' ? 'auto' : '85vh'}
          >
            <Loop
              type="flex"
              number={this.state.number}
              width={this.state.width}
              height={this.state.height}
            />
          </Flex>
        </Container>
      </>
    );
  }
}

export default properties;
