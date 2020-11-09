import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { HudItems } from '../../../src/client/containers/HudItems';

describe('React unit tests', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = shallow(<HudItems />);
  });

  describe('<HudItems />', () => {
    it('should render correclty', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
