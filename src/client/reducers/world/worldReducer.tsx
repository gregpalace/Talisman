import _cloneDeep from 'lodash.clonedeep';

import * as types from '../../constants/actionTypes';

const initialState = {
  currentMap: null,
  gameMode: null,
  turn: 0,
  storyMaps: {},
  randomMaps: [],
  floorNum: null,
  mapTransition: false,
};

const worldReducer = (state = initialState, action: any) => {
  let newState;
  let currentMapData: any;

  switch (action.type) {
    case types.MAP_TRANSITION:
      return { ...state, mapTransition: !state.mapTransition };

    case types.OPEN_CHEST:
      newState = _cloneDeep(state);
      currentMapData = getCurrentMap(newState);
      // set current chest to ground tile
      currentMapData.tiles[action.payload.y][action.payload.x].value = -2;
      return newState;

    case types.EXPLORE_TILES:
      newState = _cloneDeep(state);

      const { tiles, paddingTiles } = action.payload;
      currentMapData = getCurrentMap(newState);
      // get each tile
      tiles.forEach((tile: any[]) => {
        currentMapData.tiles[tile[1]][tile[0]].explored = 1;
      });

      // create new array of the padding tiles location as strings
      // make sure to reverse the padding tiles values to get them in [y, x],
      // which is the format the map reads them (since its a 2d array, columns then rows)
      const paddTiles = paddingTiles.map((value: any) =>
        JSON.stringify(value.reverse())
      );
      // check each padding tile direction and see if any
      // tiles are contained in the new sightbox
      if (paddTiles.length > 0) {
        Object.keys(currentMapData.paddingTiles).forEach((direction) => {
          currentMapData.paddingTiles[direction] = currentMapData.paddingTiles[
            direction
          ].map((tileRow: any[]) => {
            return tileRow.map((tile) => {
              if (paddTiles.indexOf(JSON.stringify(tile.location)) > -1) {
                tile.explored = 1;
              }
              return tile;
            });
          });
        });
      }

      return newState;

    case types.TAKE_TURN:
      // increment the turn
      return { ...state, turn: state.turn + 1 };

    case types.SET_START_MAP:
      const { startMap, gameMode, floorNum } = action.payload;

      return {
        ...state,
        gameMode,
        currentMap: startMap,
        floorNum: floorNum ? floorNum : state.floorNum,
      };

    case types.RESET:
      return initialState;

    default:
      return state;
  }

  // returns a reference to the object on newState with the map data
  function getCurrentMap(stateObj: any) {
    if (stateObj.gameMode === 'story') {
      return stateObj.storyMaps[stateObj.currentMap];
    } else {
      return stateObj.randomMaps[stateObj.floorNum - 1];
    }
  }
};

export default worldReducer;
