import React from 'react';
import { connect } from 'react-redux';

import ChestLoot from './dialogs/Chest-Loot/ChestLoot';
import GameInstructions from './dialogs/GameInstructions';
import GameTextDialog from './dialogs/GameTextDialog';
import GameWin from './dialogs/GameWin';
import MainGameStart from './dialogs/MainGameStart';
import SettingsDialog from './dialogs/SettingsDialog';
import ShopDialog from './dialogs/ShopDialog';
import LevelUp from './dialogs/LevelUp';

import { IDialog } from '../../../typings/ReducerTypes';

const DialogManager = (props: IDialog) => {
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
  } = props;

  return (
    <>
      <ChestLoot />
      <GameInstructions />
    </>
  );
};

const mapStateToProps = ({ dialog }: any) => ({ dialog });

export default connect(mapStateToProps)(DialogManager);
