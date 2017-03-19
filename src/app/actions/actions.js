import * as ACTIONS from './actionTypes';

export const setScore = (score) => {
    return {
        type: ACTIONS.WIN,
        payload: score
    };

};

export const hitPoint = (hit) => {
    return {
        type: ACTIONS.HIT,
        payload: hit
    };
};