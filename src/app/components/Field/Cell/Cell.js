import React from 'react';
import style from './Cell.css';

const Cell = props => {
  const _handleClick = () => {
    if (props.style === 'default') {
      let coords = props.coords.toString();
      return props.action({ ship: props.ship, coords: coords, target: props.target });
    }
  };

  return <div id={props.id} onClick={_handleClick} className={style[props.style]} />;
};
export default Cell;
