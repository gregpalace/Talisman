import * as types from '../../../constants/actionTypes';

export default function closeDialog() {
  return (dispatch: any) => {
    dispatch({
      type: types.PAUSE,
      payload: { pause: false },
    });
  };
}
