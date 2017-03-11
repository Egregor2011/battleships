export const setScore = (score) => {

    return {
        type: 'WIN',
        payload: score
    }

};

export const hitPoint = (hit) => {
    return {
        type: 'HIT',
        payload: hit
    }
};