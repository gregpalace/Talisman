import { Dispatch } from 'react';
import * as types from '../constants/actionTypes';
import Map1 from '../../data/maps/map1';

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
