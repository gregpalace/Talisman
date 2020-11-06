import React, { Children } from 'react';
import { connect } from 'react-redux';

import {
  GAME_VIEWPORT_SIZE,
  GAME_VIEWPORT_SIZE_LG,
} from '../../constants/actionTypes';

import '../../../stylesheets/viewport.scss';

const Viewport = ({ appState, children }: any) => {
  const gameSize = GAME_VIEWPORT_SIZE;
  const margin = '8px auto 0';

  const styles = {
    width: gameSize,
    height: gameSize,
    margin,
  };

  return (
    <div style={styles} className='viewport_container'>
      {children}
    </div>
  );
};

const mapStateToProps = ({ appState }: any) => ({ appState });

export default connect(mapStateToProps)(Viewport);
