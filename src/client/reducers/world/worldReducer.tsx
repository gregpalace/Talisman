import _cloneDeep from 'lodash.clonedeep';

import attachMetaToTiles from '../../../utils/attach-meta-to-tiles';
import generatePaddingTiles from '../../../utils/generate-padding';
import maps from '../../../data/maps';

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
  let currentMapData;

  switch (action.type) {
    case 'MAP_TRANSITION':
      return { ...state, mapTransition: !state.mapTransition };

    case 'OPEN_CHEST':
      newState = _cloneDeep(state);
      currentMapData = getCurrentMap(newState);
      // set current chest to ground tile
      currentMapData.tiles[action.payload.y][action.payload.x].value = -2;
      return newState;

    case 'EXPLORE_TILES':
      newState = _cloneDeep(state);

      const { tiles, paddingTiles } = action.payload;
      currentMapData = getCurrentMap(newState);
      // get each tile
      tiles.forEach((tile) => {
        currentMapData.tiles[tile[1]][tile[0]].explored = 1;
      });

      // create new array of the padding tiles location as strings
      // make sure to reverse the padding tiles values to get them in [y, x],
      // which is the format the map reads them (since its a 2d array, columns then rows)
      const paddTiles = paddingTiles.map((value) =>
        JSON.stringify(value.reverse())
      );
      // check each padding tile direction and see if any
      // tiles are contained in the new sightbox
      if (paddTiles.length > 0) {
        Object.keys(currentMapData.paddingTiles).forEach((direction) => {
          currentMapData.paddingTiles[direction] = currentMapData.paddingTiles[
            direction
          ].map((tileRow) => {
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

    case 'LOAD_STORY_MAPS':
      const _maps = _cloneDeep(maps);
      // go over each story map and add explored values
      // and variation data to the tiles
      Object.keys(_maps).forEach((mapName) => {
        const newTiles = attachMetaToTiles(_maps[mapName].tiles);
        const newPaddTiles = generatePaddingTiles();

        _maps[mapName] = {
          ..._maps[mapName],
          tiles: newTiles,
          paddingTiles: newPaddTiles,
        };
      });

      return { ...state, storyMaps: _maps };

    case 'ADD_RANDOM_MAP':
      const _randomMaps = _cloneDeep(state.randomMaps);

      const randomTiles = attachMetaToTiles(action.payload.tiles);
      const randomPaddTiles = generatePaddingTiles();

      _randomMaps.push({
        tiles: randomTiles,
        id: payload.id,
        paddingTiles: randomPaddTiles,
      });

      return { ...state, randomMaps: _randomMaps };

    case 'TAKE_TURN':
      // increment the turn
      return { ...state, turn: state.turn + 1 };

    case 'SET_STORY_MAP':
      const { direction, currentMap } = payload;

      const { stairs } = state.storyMaps[currentMap];

      return { ...state, currentMap: stairs[direction] };

    case 'SET_ENDLESS_MAP':
      return {
        ...state,
        currentMap: payload.map,
        floorNum: payload.floorNum,
      };

    case 'SET_START_MAP':
      const { startMap, gameMode, floorNum } = payload;

      return {
        ...state,
        gameMode,
        currentMap: startMap,
        floorNum: floorNum ? floorNum : state.floorNum,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }

  // returns a reference to the object on newState with the map data
  function getCurrentMap(stateObj) {
    if (stateObj.gameMode === 'story') {
      return stateObj.storyMaps[stateObj.currentMap];
    } else {
      return stateObj.randomMaps[stateObj.floorNum - 1];
    }
  }
};

export default worldReducer;
