import * as types from '../../constants/actionTypes';
import _cloneDeep from 'lodash.clonedeep';
import serializer from '../../../utils/serialize-items';

import { IDialog } from '../../../typings/ReducerTypes';

const initialState: IDialog = {
  gameText: false,
  gameOver: false,
  gameStart: true,
  gameInstructions: false,
  gameSelect: null,
  gameWin: false,
  paused: true,
  chest: false,
  chestOpen: false,
  shop: false,
  settings: false,
  inventory: false,
  levelUp: false,
};

const dialogManagerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.PAUSE:
      const { shop, chest, gameStart, inventory, pause } = action.payload;

      return {
        ...state,
        shop: shop || false,
        chest: chest || false,
        gameStart: gameStart || false,
        inventory: inventory || false,
        paused: pause,
      };

    case types.SET_CHEST_DATA:
      return { ...state, chestOpen: action.payload };

    case types.OPEN_SETTINGS:
      return { ...state, settings: true };

    case types.CLOSE_SETTINGS:
      return { ...state, settings: false };

    case types.SET_STORY_MAP:
      return setMap();

    case types.RESET:
      return initialState;

    default:
      return state;
  }

  // Extract Reducer Method:
  function setMap() {
    const { direction, currentMap, storyMaps } = action.payload;
    const { stairs } = storyMaps[currentMap];

    const nxtMap = stairs[direction];

    const { message } = storyMaps[nxtMap];
    // if the map has a message and player is going up, display message
    if (message && direction === 'up') {
      return {
        ...state,
        paused: true,
        gameText: {
          title: message.title,
          body: message.body,
        },
      };
    }
    return state;
  }
};

export default dialogManagerReducer;
