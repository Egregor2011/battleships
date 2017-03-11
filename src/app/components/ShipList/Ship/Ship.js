import React from 'react';
import style from './Ship.css';

export default (props) => {
    const indicatorRender = () => {
      return props.damage.map((el,id) => {
            return <i key={id} className={style[el.state]}></i>
        });
    };
    return (
        <div key={props.id} className={style.wrapper}>
            <i className={style[props.ship]}></i>
            <div className={style.indicator}>
                {indicatorRender()}
            </div>
        </div>
    )
}