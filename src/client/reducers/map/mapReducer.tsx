import * as types from '../constants/actionTypes';

interface IMapState {
  readonly tiles: any[];
}

const mapState: IMapState = {
  tiles: [],
};

const mapReducer = (state = mapState, action: any) => {
  switch (action.type) {
    case types.ADD_TILES:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
