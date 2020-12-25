import React from 'react';

import Flames from '../../assets/tiles/flames.png';
import { FLAME_SIZE } from '../constants/actionTypes';

import '../../stylesheets/HUD-Styles/flame.scss';

const Flame = ({ children, position }: any) => {
  const top = position ? position[1] * FLAME_SIZE : 0;
  const left = position ? position[0] * FLAME_SIZE : 0;

  return (
    <div
      className='flame__container'
      style={{
        top,
        left,
        backgroundImage: `url('${Flames}')`,
      }}
    >
      {children}
    </div>
  );
};

export default Flame;
