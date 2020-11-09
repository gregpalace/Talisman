import React from 'react';

import { MAX_MP } from '../../constants/actionTypes';
import { IMpFiller } from '../../../typings/HUDTypes';

const MpFiller = ({ mp, percentage }: IMpFiller) => {
  return (
    <div
      className='mp-filler'
      style={{ textAlign: 'center', width: `${percentage}%` }}
    >
      MP: {mp >= 20 ? `${mp} / ${MAX_MP}` : ''}
    </div>
  );
};

export default MpFiller;
