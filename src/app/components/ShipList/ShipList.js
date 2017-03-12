import React from 'react';
import Ship from './Ship/Ship.js';
import style from './ShipList.css';

export default (props) => {
    const shipRender = () => {
        return props.ships.map((current, id) => {
            let position = current['hitpoints'];
            return <Ship id={id} damage={current['damage']} sunk={current['sunk']} hits={position} ship={current['ship']} />;
        })
    };
    return (
        <div className={style.wrapper}>
            {shipRender()}
        </div>
    )
}