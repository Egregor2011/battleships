import React from 'react';
import style from './Cell.css';


const Cell = (props) => {

    const _handleClick = () => {
        let coords = props.coords.toString();
        return props.action({ship: props.ship, coords: coords, target: props.target})
    };

    return <div key={props.id} onClick={_handleClick} className={style[props.style]}></div>
};
export default Cell;

