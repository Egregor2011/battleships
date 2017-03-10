import React from 'react';
import Cell from './Cell/Cell.js';
import style from './Pole.css';

export default (props) => {
    const poleRender = () => {
      return props.cell.map((el) => {
          return el.map((cell) => {
              return <Cell ships={props.ships} x={cell.x} y={cell.y}/>
          })
      });
    };
    // const shipShow = () => {
      // props.ships.map((ship) => {
      //     return console.log(ship.position);
      // })
    // };
    return (
        <div className={style.pole}>
            {poleRender()}
        </div>
    )
}