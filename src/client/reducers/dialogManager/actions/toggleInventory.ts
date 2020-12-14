import * as types from '../../../constants/actionTypes';

export default function toggleInventory() {
  return (dispatch: any, getState: any) => {
    if (getState().dialog.inventory) {
      dispatch({
        type: types.PAUSE,
        payload: { pause: false },
      });
    } else {
      dispatch({
        type: types.PAUSE,
        payload: {
          pause: true,
          inventory: true,
        },
      });
    }
  };
}
