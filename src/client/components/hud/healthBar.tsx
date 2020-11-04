import React from 'react';

import Filler from './Filler';

import '../../../stylesheets/HUD-Styles/healthBar.scss';

interface IHealth {
  percentage: number | null;
}

const HealthBar = (props: IHealth) => {
  return (
    <div className='health-bar'>
      <Filler percentage={props.percentage} />
    </div>
  );
};

export default HealthBar;
