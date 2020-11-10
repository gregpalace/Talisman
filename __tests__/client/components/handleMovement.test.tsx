import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Player } from '../../../src/client/components/Player';
import handleMovement from '../../../src/client/components/handleMovement';
import { EventEmitter } from 'events';

describe('Player Movemet Tests', () => {
  let wrapper: any;

  const playerState = {
    position: [150, 50],
    direction: 'EAST',
    spritePosition: '100px 100px',
    walkIndex: 0,
  };

  /**
   * MOCK OUR WINDOW OBJECT
   */

  // const map: any = {};
  // window.addEventListener = jest.fn((event, cb) => {
  //   map[event] = cb;
  // });

  beforeAll(() => {
    wrapper = shallow(<Player {...playerState} />);
  });

  xit('should return the proper position for our player', () => {});
});
