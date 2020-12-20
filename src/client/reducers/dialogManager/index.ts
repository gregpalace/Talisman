import React from 'react';
import { connect } from 'react-redux';

import ChestLoot from './dialogs/ChestLoot';
import InventoryDialog from './dialogs/InventoryDialog';
import GameInstructions from './dialogs/GameInstructions';
import GameTextDialog from './dialogs/GameTextDialog';
import GameWin from './dialogs/GameWin';
import GameOver from './dialogs/GameOver';
import MainGameStart from './dialogs/MainGameStart';
import SettingsDialog from './dialogs/SettingsDialog';
import ShopDialog from './dialogs/ShopDialog';
import LevelUp from './dialogs/LevelUp';

const DialogManager = ({ dialog }: any) => {
  const {
    chest,
    inventory,
    gameText,
    gameOver,
    gameStart,
    gameSelect,
    gameWin,
    gameInstructions,
    paused,
    settings,
    shop,
    levelUp,
  } = dialog;

  let PauseComp = null;
  let SettingsComp = null;
  let LevelUpComp = null;

  if (paused) {
    if (chest) PauseComp = <ChestLoot />;
    if (shop) PauseComp = <ShopDialog />;
    if (inventory) PauseComp = <InventoryDialog />;
    if (gameText)
      PauseComp = (
        <GameTextDialog text1={gameText.title} text2={gameText.body} />
      );
    if (gameInstructions) PauseComp = <GameInstructions />;
    if (gameOver) PauseComp = <GameOver />;
    if (gameStart) PauseComp = <GameSelect />;
    if (gameSelect) {
      if (gameSelect === 'story') PauseComp = <MainGameStart />;
      if (gameSelect === 'endless') PauseComp = <EndlessGameStart />;
    }
    if (gameWin) PauseComp = <GameWin />;
  }
  if (settings) SettingsComp = <SettingsDialog />;
  if (levelUp) LevelUpComp = <LevelUp />;

  return (
    <>
      {/* Show the 'paused' component here - this is the game start screen,
        game over screen, as well as other dialogs throughout the game */}
      {PauseComp}

      {LevelUpComp}

      {/* Show the 'settings' component over the 'paused' components */}
      {SettingsComp}
    </>
  );
};

const mapStateToProps = ({ dialog }) => ({ dialog });

export default connect(mapStateToProps)(DialogManager);
