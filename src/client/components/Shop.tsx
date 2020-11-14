import React from 'react';

import ShopKeepSprite from '../../assets/tiles/shop-keep.png';

import '../../stylesheets/shop.scss';

const ShopKeep = () => {
  return (
    <div
      className='shop-keep-animated'
      style={{ backgroundImage: `url(${ShopKeepSprite})` }}
    />
  );
};

export default ShopKeep;
