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

export const setUpMaps = () => ({
  type: types.SET_STORY_MAP,
  payload: {
    direction: 'up',
    currentMap: Map1,
    storyMaps: maps,
  },
});
