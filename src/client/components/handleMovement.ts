import store from '../../store';
import { SPRITE_SIZE } from '../constants/actionTypes';

export default function handleMovement(player: any) {
  
  function getNewPosition(direction: string | null) {
    const oldPosition = store.getState().position;

    switch(direction) {
      case 'WEST':
        return [ oldPosition[0], oldPosition[1] - SPRITE_SIZE ]
      case 'EAST':
        return [ oldPosition[0], oldPosition[1] + SPRITE_SIZE ]
      case 'NORTH':
        return [ oldPosition[0] - SPRITE_SIZE, oldPosition[1] ]
      case 'SOUTH':
        return [ oldPosition[0] + SPRITE_SIZE, oldPosition[1] ]
      default:
        return undefined;
    }
  }

  function dispatchMove(direction: string | null) {
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: getNewPosition(direction),
      }
    });
  };

  function handleKeyDown(e: any) {
    e.preventDefault();

    switch(e.keyCode) {
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