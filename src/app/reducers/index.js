import {ships} from '../state/state.js';

const initialState = ships;

const scoreState = (state = initialState, action) => {
    if (action.type === 'SHOT') {
        return { ...state, score: action.payload }
    }
    return state;
};

export default scoreState;