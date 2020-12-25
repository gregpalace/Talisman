import React, { useState } from 'react';

import Flame from '../components/Flame';

import '../../stylesheets/mainMenu.scss';

const MainMenu = () => {
  const [isHovering, setHovering] = useState(false);

  const handleMouseHover = () => {
    return setHovering(!isHovering);
  };

  return (
    <div className='main-menu'>
      <header className='heading'>
        <img id='game-logo' src='../../assets/logo/logo.png' alt='Talisman' />
        <h1>Talisman</h1>
      </header>
      <br />
      <main className='menu-options'>
        <ul>
          <li>
            <a
              href='/game'
              onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseHover}
            >
              {' '}
              Start Game{' '}
              {isHovering && (
                <span>
                  <Flame />
                </span>
              )}
            </a>
          </li>
          <li>
            <a href='/game'>Continue Game</a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default MainMenu;
