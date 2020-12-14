import * as types from '../../../constants/actionTypes';

export function toggleSettings() {
  return (dispatch: any, getState: any) => {
    if (getState().dialog.settings) {
      dispatch({
        type: types.CLOSE_SETTINGS,
        payload: null,
      });
    } else {
      dispatch({
        type: types.OPEN_SETTINGS,
        payload: null,
      });
    }
  };
}
