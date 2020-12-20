import * as types from '../../../constants/actionTypes';

export const startMainGame = () => {
  return (dispatch: any, getState: any) => {
    // this needs to happen before add tiles, explore tiles, or add monsters
    dispatch({
      type: types.SET_START_MAP,
      payload: {
        startMap: types.START_MAP,
        gameMode: 'story',
      },
    });
  };
};
