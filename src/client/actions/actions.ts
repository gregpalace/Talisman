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
