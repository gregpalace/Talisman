import * as types from '../constants/actionTypes';

import Map1 from '../../data/maps/map1';
import maps from '../../data/maps';

export const takeDamage = () => ({
  type: types.TAKE_DAMAGE,
});

export const setTiles = () => ({
  type: types.ADD_TILES,
  payload: {
    Map1,
  },
});

export const playerDied = () => ({
  type: types.PLAYER_DIED,
  payload: null,
});

export const playerAttacked = () => ({
  type: types.PLAYER_ATTACKED,
  payload: null,
});

export const monsterDied = () => ({
  type: types.MONSTER_DIED,
  payload: null,
});

export const setUpMaps = () => ({
  type: types.SET_STORY_MAP,
  payload: {
    direction: 'up',
    currentMap: Map1,
    storyMaps: maps,
  },
});

export const backToSelect = () => {
  return (dispatch: any) => {
    dispatch({
      type: types.PAUSE,
      payload: {
        pause: true,
        gameStart: true,
      },
    });
  };
};
