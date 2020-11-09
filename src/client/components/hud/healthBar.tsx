import React from 'react';

import Filler from './Filler';
import { IHealth } from '../../../typings/HUDTypes';

import '../../../stylesheets/HUD-Styles/healthBar.scss';

const HealthBar = ({ hp, percentage }: IHealth) => {
  return (
    <div className='health-bar'>
      <Filler hp={hp} percentage={percentage} />
    </div>
  );
};

export default HealthBar;
