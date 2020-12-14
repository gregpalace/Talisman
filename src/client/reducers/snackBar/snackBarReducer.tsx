import * as types from '../../constants/actionTypes';

const initialState = {
  notEnoughGold: '',
  tooManyItems: '',
  itemDropped: '',
  itemReceived: '',
};

const snackbarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.NOT_ENOUGH_COINS:
      return {
        ...state,
        notEnoughGold: `${action.payload.name}-${new Date().getTime()}`,
      };

    case types.TOO_MANY_ITEMS:
      return {
        ...state,
        tooManyItems: `${action.payload.name}-${new Date().getTime()}`,
      };

    case types.GET_ITEM:
      return {
        ...state,
        itemReceived: `${action.payload.name}-${new Date().getTime()}`,
      };

    case types.DROP_ITEM:
      return {
        ...state,
        itemDropped: `${action.payload.name}-${new Date().getTime()}`,
      };

    case types.RESET:
      return initialState;

    default:
      return state;
  }
};

export default snackbarReducer;
