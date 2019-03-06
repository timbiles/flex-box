import React from 'react';
import { Cont } from '../styles/gridStyles';
import { Pa } from '../styles/flex';

const Loop = ({
  number,
  width,
  height,
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  num,
  boxShadow,
  padding,
  type,
  handleClick,
  keyPress,
  keyUp
}) => {
  
  const arr = Array(number).fill(0).map((e, i) => i + 1);

  return arr.map((e, i) => {
    return type === 'grid' ? (
      <Cont
        key={i}
        id={i}
        onClick={handleClick}
        onKeyDown={keyPress}
        onKeyUp={keyUp}
        tabIndex="0"
        rowStart={i === num && rowStart}
        colStart={i === num && colStart}
        rowEnd={i === num && rowEnd}
        colEnd={i === num && colEnd}
        boxShadow={i === num && boxShadow && '1px 1px 5px 3px grey'}
      >
        {e}
      </Cont>
    ) : (
      <Pa main key={i} width={width && width} height={height} padding={padding}>
        {e}
      </Pa>
    );
  });
};
export default Loop;
