import React from 'react';
import Ship from './Ship/Ship.js';
import style from './ShipList.css';

export default (props) => {
    const shipRender = () => {
        return props.ships.map((current, id) => {
            let position = current['positions'];
            return <Ship id={id} hits={position} ship={current['ship']} />;
        })
    };
    return (
        <div className={style.wrapper}>
            {shipRender()}
        </div>
    )
}