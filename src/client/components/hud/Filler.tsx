import React from 'react';

interface IFiller {
  percentage: number | null;
}

const Filler = (props: IFiller) => {
  return <div className='filler' style={{ width: `${props.percentage}%` }} />;
};

export default Filler;
