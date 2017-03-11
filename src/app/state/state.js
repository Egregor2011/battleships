const shipInfo = {
  "shipTypes": {
    "carrier": { "size": 5, "count": 1 },
    "battleship": { "size": 4, "count": 1 },
    "cruiser": { "size": 3, "count": 1 },
    "submarine": { "size": 3, "count": 1 },
    "destroyer": { "size": 2, "count": 1 },
  },
  "layout": [
    { "ship": "carrier", "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] },
    { "ship": "battleship", "positions": [[5,2], [5,3], [5,4], [5,5]]},
    { "ship": "cruiser", "positions": [[8,1], [8,2], [8,3]]},
    { "ship": "submarine", "positions": [[3,0], [3,1], [3,2]]},
    { "ship": "destroyer", "positions": [[0,0], [1,0]]},
  ]
};

const rows = 10;

const initialState = {...shipInfo};

const ships = {...shipInfo, score: 0 ,
  layout: shipInfo['layout'].map((ship) => {
    ship['sunk'] = false;
    ship['hitpoints'] = ship['positions'].length;
    ship['damage'] = [...Array(ship['positions'].length)].map((_,i) => { return {num: i, state: 'default'}});
    return ship;
}), playground: [...Array(rows)].map((_,i) => {
    return [...Array(rows)].map((_, el) => {
      const position = [i, el];
      let isShip = false;
      let shipType = '';
      shipInfo['layout'].map((obj) => {
        let currentShip = obj['ship'];
        return obj['positions'].map((ship) => {
            if (ship.toString() === position.toString()){
               shipType = currentShip;
               return isShip = true;
            }
        })
      });
      return {coords:[i,el], target: isShip, type: shipType, style: 'default'};
    });
})};

export {ships, initialState};
