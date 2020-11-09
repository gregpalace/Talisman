import React from 'react';

import { MAX_HP } from '../../constants/actionTypes';
import { IFiller } from '../../../typings/HUDTypes';

const Filler = ({ hp, percentage }: IFiller) => {
  return (
    <div
      className='filler'
      style={{ textAlign: 'center', width: `${percentage}%` }}
    >
      {hp >= 20 ? `${hp} / ${MAX_HP}` : ''}
    </div>
  );
};

export default Filler;
