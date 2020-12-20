import * as types from '../../../constants/actionTypes';

export const resetGameState = () => {
  return (dispatch: any) => {
    dispatch({
      type: types.RESET,
      payload: null,
    });

    dispatch({
      type: types.PAUSE,
      payload: {
        pause: true,
        gameStart: true,
      },
    });
  };
};
