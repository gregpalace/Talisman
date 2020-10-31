import store from '../../store';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../constants/actionTypes';

export default function handleMovement(player: any) {
  function getNewPosition(oldPos: number[], direction: string | null) {
    const oldPosition = store.getState().player.position;

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

  function observeBoundaries(oldPos: any, newPos: number[] | any) {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
    );
  }
  // Able to walk through trees and rocks?
  function observeImpassable(oldPos: number[] | any, newPos: number[] | any) {
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    return nextTile < 5;
  }

  function dispatchMove(newPos: number[] | any) {
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: newPos,
      },
    });
  }

  function attemptMove(direction: string | any) {
    const oldPos = store.getState().player.position;
    const newPos = getNewPosition(oldPos, direction);

    if (
      observeBoundaries(oldPos, newPos) &&
      observeImpassable(oldPos, newPos)
    ) {
      dispatchMove(newPos);
    }
  }

  function handleKeyDown(e: any) {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return attemptMove('WEST');
      case 38:
        return attemptMove('NORTH');
      case 39:
        return attemptMove('EAST');
      case 40:
        return attemptMove('SOUTH');
      default:
        return undefined;
    }
  }

  window.addEventListener('keydown', (e: any) => {
    handleKeyDown(e);
  });

  return player;
}
