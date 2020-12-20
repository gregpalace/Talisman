import React from 'react';

import Button from '../../../components/Button';
import Dialog from '../../../components/Dialog';

import ArrowKeys from '../../../../assets/tiles/arrow-keys.png';
import DoubleTap from '../../../../assets/tiles/double-tap.png';
import Enter from '../../../../assets/tiles/enter.png';
import Space from '../../../../assets/tiles/space.png';
import Swipe from '../../../../assets/tiles/swipe.png';
import WASDKeys from '../../../../assets/tiles/wasd-keys.png';

import '../../../../stylesheets/gameInventory.scss';

const GameInstructions = () => {
  return (
    <Dialog>
      <div className='game-instructions__title'>{'Game Controls'}</div>

      <div className='game-instructions__text'>
        <span style={{ paddingBottom: 12 }}>{`MOVEMENT`}</span>

        <div className={`flex-row align-center space-evenly`}>
          <img src={Swipe} alt='swipe' />
          <div className='game-instructions__native-text'>
            {'SWIPE and HOLD to MOVE'}
          </div>

          <img src={ArrowKeys} alt='arrow-keys' />
          <img src={WASDKeys} alt='wasd-keys' />
        </div>

        <span style={{ paddingTop: 12 }}>{`ATTACK`}</span>

        <div className={`flex-row align-center space-evenly`}>
          <img src={DoubleTap} alt='double-tap' />
          <div className='game-instructions__native-text'>
            {'DOUBLE TAP to ATTACK'}
          </div>

          <img src={Space} alt='space' />
          <img src={Enter} alt='enter' />
        </div>
      </div>

      <div className='flex-column game-instructions__button'>
        <Button />
      </div>
    </Dialog>
  );
};

export default GameInstructions;
