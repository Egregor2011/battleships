import React from 'react';
import Ship from './Ship/Ship';
import style from './ShipList.css';

export default (props) => {
    const shipRender = () => {
        return props.ships.map((current, id) => {
            let position = current['hitpoints'];
            return <Ship key={id} damage={current['damage']} sunk={current['sunk']} hits={position} ship={current['ship']} />;
        });
    };
    return (
        <div className={style.wrapper}>
            {shipRender()}
        </div>
    );
};