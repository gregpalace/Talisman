import * as types from '../constants/actionTypes';

import store from '../../store';

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

export const closeChestDialog = () => {
  return () => {
    ({
      type: types.SET_CHEST_DATA,
      payload: false,
    });
  };
};

export const openSettings = () => {
  return () => {
    ({
      type: types.OPEN_SETTINGS,
      payload: null,
    });
  };
};

export const closeSettings = () => {
  return () => {
    ({
      type: types.CLOSE_SETTINGS,
      payload: null,
    });
  };
};
