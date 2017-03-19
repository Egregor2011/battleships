import { ships } from '../state/state';

const inState = ships;

const scoreState = (state = inState, action) => {

    // If the player has won..

    if (action.type === 'WIN') {
        return {
            ...state,

            // Setting the score + 1

            score: state.score + 1,

            // Resetting the ships options

            layout: state.layout.map((ship) => {
                ship.hitpoints = ship.positions.length;
                ship.sunk = false;
                ship.damage.map((el) => {
                    return el.state = 'default';
                });
                return ship;

            }),

            // Resetting the basic state of game field

            playground: state.playground.map((obj) => {
                return obj.map((ship) => {
                    ship.style = 'default';
                    return ship;
                });
            }),
        };
        
    // If the ship has been hit

    } else if (action.type === 'HIT') {

        return {
            ...state,

            layout: state.layout.map((ship) => {
                if (ship.ship === action.payload.ship) {
                    if (ship.hitpoints !== 0) {

                        // Reducing the ship's hitpoints

                        ship.hitpoints = ship.hitpoints - 1;
                        ship.damage.map((el) => {
                            if (el.num === ship.hitpoints) {
                                el.state = 'hit';
                            }
                        });

                        // If there's no more hitpoints, setting the sunk state

                        if (ship.hitpoints === 0) {
                            ship.sunk = true;
                        }
                    }
                    return ship;

                } else {
                    return ship;
                }
            }),

            // Setting the state of the playground cell in depends on was it hit or miss

            playground: state.playground.map((obj) => {
                return obj.map((ship) => {
                    let coords = ship.coords.toString();
                    if (coords === action.payload.coords) {
                        ship.style = action.payload.target ? 'hit' : 'miss';
                    }
                    return ship;
                });
            })
        };
    }
    return state;
};

export default scoreState;