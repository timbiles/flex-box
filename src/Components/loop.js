import React from 'react';
import { Cont } from '../styles/gridStyles';
import { P } from '../styles/flex';

const loop = props => {
  const { number, width, height } = props;
  const arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  return arr.map((e, i) =>
    props.type === 'grid' ? (
      <Cont key={i}>{e}</Cont>
    ) : (
      <P main key={i} width={width && width} height={height}>
        {e}
      </P>
    )
  );
};

export default loop;
