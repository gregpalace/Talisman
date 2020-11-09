import React from 'react';

import MpFiller from './MpFiller';

import '../../../stylesheets/HUD-Styles/magicBar.scss';

const MagicBar = ({ mp, percentage }: any) => {
  return (
    <div className='magic-bar'>
      <MpFiller mp={mp} percentage={percentage} />
    </div>
  );
};

export default MagicBar;
