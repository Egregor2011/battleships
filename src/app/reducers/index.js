import {ships} from '../state/state.js';

const inState = ships;

const scoreState = (state = inState, action) => {
    if (action.type === 'WIN') {
        return {
            ...state, score: state.score + 1 ,layout: state['layout'].map((ship) => {
                ship['hitpoints'] = ship['positions'].length;
                ship['sunk'] = false;
                ship['damage'].map((el) => {
                    el.state = 'default';
                });
                return ship;

            }),
            playground: state['playground'].map((obj) => {
                return obj.map((ship) => {
                    ship.style = 'default';
                    return ship;
                })
            })
        }
    } else if (action.type === 'HIT') {
        return {
            ...state, layout: state['layout'].map((ship) => {
                if (ship['ship'] === action.payload.ship) {
                    if (ship['hitpoints'] !== 0) {
                        ship['hitpoints'] = ship['hitpoints'] - 1;
                        ship['damage'].map((el) => {
                            if (el.num === ship['hitpoints']) {
                                el.state = 'hit';
                            }
                        });
                        if (ship['hitpoints'] === 0) {
                            ship['sunk'] = true;
                        }
                    }
                    return ship;

                } else {
                    return ship;
                }
            }),
            playground: state['playground'].map((obj) => {
                return obj.map((ship) => {
                    let coords = ship.coords.toString();
                    if (coords === action.payload.coords) {
                        ship.style = action.payload.target ? 'hit' : 'miss';
                    }
                    return ship;
                })
            })
        }
    }
    return state;
};

export default scoreState;