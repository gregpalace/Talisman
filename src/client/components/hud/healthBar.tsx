import React from 'react';

import Filler from './Filler';
import { IHealth } from '../../../typings/HUDTypes';

import '../../../stylesheets/HUD-Styles/healthBar.scss';

const HealthBar = (props: IHealth) => {
  return (
    <div className='health-bar'>
      <Filler percentage={props.percentage} />
    </div>
  );
};

export default HealthBar;
