import * as types from '../../../constants/actionTypes';

export default function closeChestDialog() {
  return (dispatch: any) => {
    dispatch({
      type: types.SET_CHEST_DATA,
      payload: false,
    });
    dispatch({
      type: types.PAUSE,
      payload: { pause: false },
    });
  };
}
