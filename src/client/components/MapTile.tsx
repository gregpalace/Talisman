import React from 'react';

import { SPRITE_SIZE } from '../constants/actionTypes';
import { IMapTile } from '../../typings/MapTypes';

import '../../stylesheets/tiles.scss';

const MapTile: React.FC<IMapTile> = ({ tile }) => {
  const getTileSprite = (type: number) => {
    switch (type) {
      case 0:
        return 'grass';
      case 1:
        return 'dirt';
      case 2:
        return 'water';
      case 3:
        return 'tree';
      case 5:
        return 'rock';
      case 6:
        return 'mossy-rock';
      case 9:
        return 'chest';
      default:
        return null;
    }
  };

  return (
    <div
      className={`tile ${getTileSprite(tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
      }}
    />
  );
};

export default MapTile;
