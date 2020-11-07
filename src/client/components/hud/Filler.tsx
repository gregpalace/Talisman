import React from 'react';

import { IFiller } from '../../../typings/HUDTypes';

const Filler = (props: IFiller) => {
  return <div className='filler' style={{ width: `${props.percentage}%` }} />;
};

export default Filler;
