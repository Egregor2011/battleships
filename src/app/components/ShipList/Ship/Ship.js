import React from 'react';
import style from './Ship.css';

export default (props) => {
    const indicatorRender = () => {
      return props.damage.map((el,id) => {
            return <i key={id} className={style[el.state]}></i>;
        });
    };
    const sunkCheck = () => {
      const isSunk = props.sunk.toString();
      return style['sunk--' + isSunk];
    };
    return (
        <div key={props.id} className={sunkCheck()}>
            <i className={style[props.ship]}></i>
            <div className={style.indicator}>
                {indicatorRender()}
            </div>
        </div>
    );
};