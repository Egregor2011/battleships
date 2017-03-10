import React from 'react';
import style from './Ship.css';

export default (props) => {
    const indicatorRender = () => {
      return props.hits.map((hit) => {
            return <i className={style.damage}></i>
        });
    };
    return (
        <div key={props.id.toString()} className={style.wrapper}>
            <i className={style[props.ship]}></i>
            <div className={style.indicator}>
                {indicatorRender()}
            </div>
        </div>
    )
}