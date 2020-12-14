import * as types from '../../../constants/actionTypes';

// import { IItem } from '../../../../typings/ItemTypes';

export default function dropItem(item: any) {
  return (dispatch: any) => {
    dispatch({
      type: types.DROP_ITEM,
      payload: item,
    });
  };
}
