import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Map from '../../../src/client/components/map';

describe('React unit tests', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Map />);
  });

  describe('<Map />', () => {
    it('Should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('Should redner a wrapper with style properties', () => {
      expect(wrapper.find('style')).toBeTruthy();
      expect(wrapper.prop('style').width).toEqual('800px');
      expect(wrapper.prop('style').height).toEqual('400px');
      expect(wrapper.prop('style').backgroundColor).toEqual('black');
    })
  });
});