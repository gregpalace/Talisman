import React, { useEffect } from 'react';

import LoadIcon from '../components/LoadIcon';

import '../../stylesheets/splash.scss';

interface SplashProps {
  setFirstVisit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Splash = ({ setFirstVisit }: SplashProps) => {
  // Display splash for 3 seconds
  useEffect(() => {
    setTimeout(() => setFirstVisit(false), 3000);
  }, []);

  return (
    <div id='splash'>
      <img id='splashLogo' src={'./assets/logo/logo.png'} alt='Talisman' />
      <h1>Talisman</h1>
      <LoadIcon />
    </div>
  );
};

export default Splash;
