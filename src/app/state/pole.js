import {rows} from './state.js';

const pole = [...Array(rows)].map((_,i) => {
    return [...Array(rows)].map((_, el) => {
        return {x: i, y: el};
    })
});

export default pole;
