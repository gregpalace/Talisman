import * as types from '../constants/actionTypes';

import store from '../../store';

import Map1 from '../../data/maps/map1';
import maps from '../../data/maps';
import { Dispatch } from 'react';
import { IStatsState } from '../../typings/ReducerTypes';
import { IState } from '../../typings/PlayerTypes';
import { AnyAction } from 'redux';

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

export const drinkPotion = (item: any) => ({
  type: types.HEAL,
  payload: item.hp,
});

export const buyItem = (item: any) => ({
  type: types.LOSE_COINS,
  payload: item.value,
});

export const pickupItem = (item: any) => ({
  type: types.GET_ITEM,
  payload: item,
});

export function equipItem(item: any) {
  return (dispatch: any) => {
    dispatch({
      type: types.EQUIP_ITEM,
      payload: item,
    });
  };
}

// export function toggleSettings() {
//   const settings = store.getState().dialog.settings;
//   return (dispatch: any) => {
//     if (settings) {
//       dispatch({
//         type: 'CLOSE_SETTINGS',
//         payload: null,
//       });
//     } else {
//       dispatch({
//         type: 'OPEN_SETTINGS',
//         payload: null,
//       });
//     }
//   };
// }

export const closeChestDialog = () => ({
  type: types.SET_CHEST_DATA,
  payload: false,
});

export const openSettings = () => ({
  type: types.OPEN_SETTINGS,
  payload: null,
});

export const closeSettings = () => ({
  type: types.CLOSE_SETTINGS,
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

export function toggleInventory() {
  return (dispatch: any, getState: any) => {
    if (getState().dialog.inventory) {
      dispatch({
        type: 'PAUSE',
        payload: { pause: false },
      });
    } else {
      dispatch({
        type: 'PAUSE',
        payload: {
          pause: true,
          inventory: true,
        },
      });
    }
  };
}

export function toggleSettings() {
  return (dispatch: any, getState: any) => {
    if (getState().dialog.settings) {
      dispatch({
        type: types.CLOSE_SETTINGS,
        payload: null,
      });
    } else {
      dispatch({
        type: types.OPEN_SETTINGS,
        payload: null,
      });
    }
  };
}

export function openChest() {
  return (dispatch: any, getState: () => IState) => {
    const { stats } = getState();
    const { level, expToNxtLevel } = stats;
    // get a random amount of gold between 1 and 8 PLUS player level x3
    const coins = Math.floor(Math.random() * 8) + 1 + level * 3;
    // get some level based exp
    const exp = level * 5 + 5;

    dispatch({
      type: types.GET_COINS,
      payload: coins,
    });
    dispatch({
      type: types.GET_EXP,
      payload: exp,
    });
    dispatch({
      type: types.SET_CHEST_DATA,
      payload: {
        exp,
        coins,
      },
    });
    if (exp + stats.exp >= expToNxtLevel) {
      dispatch({
        type: 'PAUSE',
        payload: {
          pause: true,
          levelUp: true,
          chest: true,
        },
      });
    }
  };
}
