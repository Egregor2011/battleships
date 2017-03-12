import React from 'react';
import Cell from './Cell/Cell.js';
import style from './Field.css';

export default (props) => {
    const fieldRender = () => {
      return props.cell.map((obj) => {
          return obj.map((cell, id) => {
             return <Cell id={id} setScore={props.setScore} target={cell.target} action={props.actions} ship={cell.type} style={cell.style} coords={cell.coords}/>
          });
      });
    };
    return (
        <div className={style.field}>
            {fieldRender()}
        </div>
    )
}