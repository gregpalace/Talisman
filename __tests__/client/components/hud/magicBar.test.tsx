import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MagicBar from '../../../../src/client/components/hud/magicBar';
import MpFiller from '../../../../src/client/components/hud/MpFiller';

describe('React unit tests', () => {
  let wrapper: any;

  const props = {
    mp: 23,
    percentage: 50,
  };

  beforeAll(() => {
    wrapper = shallow(<MagicBar {...props} />);
  });

  describe('<MagicBar />', () => {
    it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render a <div> containing the magicbar', () => {
      expect(wrapper.find('div').prop('className')).toBe('magic-bar');
    });

    it('should render a <MpFiller /> component ', () => {
      const filler = wrapper.find(MpFiller);
      expect(filler).toBeDefined();
      expect(filler.props()).toEqual({ mp: 23, percentage: 50 });
      expect(filler.prop('mp')).toBe(23);
      expect(filler.prop('percentage')).toBe(50);
    });
  });
});
