import { Dispatch } from 'react';
import * as types from '../constants/actionTypes';
import { tiles } from '../../data/maps/1/map1';

export const takeDamage = () => ({
  type: types.TAKE_DAMAGE,
});

export const setTiles = () => ({
  type: types.ADD_TILES,
  payload: {
    tiles,
  },
});
