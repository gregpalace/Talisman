import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/Button';
import Dialog from '../../../components/Dialog';
import { backToSelect } from '../../../actions/actions';
import { startMainGame } from '../../../actions/actions';

import '../../../../stylesheets/mainGameStart.scss';

const MainGameStart = ({ startMainGame, backToSelect }: any) => {
  return (
    <Dialog goBack={backToSelect} onKeyPress={startMainGame}>
      <span className='flex-row game-start__title'>{'Story Mode'}</span>

      <span className='flex-column game-start__text'>
        {'Explore the dark dungeon, full of monsters and gear!'}
      </span>

      <div className='flex-column game-start__button'>
        <Button
          onClick={startMainGame}
          icon='compass'
          title={'Explore Dungeon'}
        />
      </div>
    </Dialog>
  );
};

const actions = { backToSelect, startMainGame };

export default connect(null, actions)(MainGameStart);
