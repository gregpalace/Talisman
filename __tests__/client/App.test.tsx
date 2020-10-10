import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../../src/App';

describe('React unit test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('<App />', () => {
    it('should render', () => {
      expect(wrapper.length).toBe(1);
      expect(wrapper).toBeTruthy();
    });
    it('should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('should match snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});