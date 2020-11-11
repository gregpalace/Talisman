import React from 'react';

import { VERSION } from '../constants/actionTypes';

import '../../stylesheets/footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <span>{`Talisman ~ v${VERSION}`} </span>

      <a className='footer-link' href='https://github.com/gregpalace/Talisman'>
        {'View on Github'}
      </a>
    </footer>
  );
};

export default Footer;
