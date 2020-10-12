import * as types from '../constants/actionTypes';


interface IPlayerState {
  readonly hp: number,
  readonly mp: number,
  readonly position: number[],
  readonly inventorySlots: number,
};

const playerState: IPlayerState = {
  hp: 100,
  mp: 150,
  position: [0,0],
  inventorySlots: 10
};

const playerReducer = (state = playerState, action: any) => {
  switch(action.type) {
    case types.MOVE_PLAYER:
      console.log(action.payload)
      return {
        ...action.payload
      }
    default:
      return state
  }
}


export default playerReducer;