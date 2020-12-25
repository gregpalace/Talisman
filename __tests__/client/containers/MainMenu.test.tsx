import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MainMenu from '../../../src/client/containers/MainMenu';

describe('React unit tests', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<MainMenu />);
  });

  describe('<MainMenu />', () => {
    it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should display the game logo in the header', () => {
      const header = wrapper.find('header');
      expect(header).toBeDefined();
      expect(header.find('img').prop('src')).toEqual(
        '../../assets/logo/logo.png'
      );
      expect(header.find('h1').text()).toEqual('Talisman');
    });

    it('should render a list with menu options', () => {
      const main = wrapper.find('main');
      expect(main).toBeDefined();
      expect(main.find('ul').length).toEqual(1);
    });

    it('should render both a start and continue game option', () => {
      const list = wrapper.find('ul');
      list.forEach((listItem: any, index: number) => {
        if (index === 0) {
          expect(listItem[index].prop('href')).toEqual('/game');
          expect(listItem[index].text()).toEqual(' Start Game ');
        }
      });
    });
  });
});
