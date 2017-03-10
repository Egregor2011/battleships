const setScore = (score) => {

    return {
        type: 'SHOT',
        payload: score
    }

};

export default setScore;