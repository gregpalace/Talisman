import store from '../../store';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../constants/actionTypes';

export default function handleMovement(player: any) {
  function getNewPosition(direction: string | null) {
    const oldPosition = store.getState().position;

    switch (direction) {
      case 'WEST':
        return [oldPosition[0], oldPosition[1] - SPRITE_SIZE];
      case 'EAST':
        return [oldPosition[0], oldPosition[1] + SPRITE_SIZE];
      case 'NORTH':
        return [oldPosition[0] - SPRITE_SIZE, oldPosition[1]];
      case 'SOUTH':
        return [oldPosition[0] + SPRITE_SIZE, oldPosition[1]];
      default:
        return undefined;
    }
  }

  function observeBoundaries(oldPos: number[], newPos: number[] | any) {
    return newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
      ? newPos
      : oldPos;
  }

  function dispatchMove(direction: string | null) {
    const oldPos = store.getState().position;
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: observeBoundaries(oldPos, getNewPosition(direction)),
      },
    });
  }

  function handleKeyDown(e: any) {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return dispatchMove('WEST');
      case 38:
        return dispatchMove('NORTH');
      case 39:
        return dispatchMove('EAST');
      case 40:
        return dispatchMove('SOUTH');
      default:
        return undefined;
    }
  }

  window.addEventListener('keydown', (e: any) => {
    handleKeyDown(e);
  });

  return player;
}
