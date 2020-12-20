import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/Button';
import ConfirmDialog from '../../../components/ConfirmDialog';
import Dialog from '../../../components/Dialog';
import { closeSettings } from '../actions/closeSettings';
import { resetGameState } from '../../world/actions/resetGame';

import '../../../../stylesheets/settingsDialog.scss';

const SettingsDialog = ({ resetGameState, closeSettings }: any) => {
  const [confirmQuit, setConfirmQuit] = useState(false);

  return (
    <Dialog>
      <div className='flex-column settings-dialog__container'>
        <span className='settings-dialog__title'>{'Settings'}</span>

        <Button
          onClick={() => setConfirmQuit(true)}
          icon='caret-square-left'
          title='Return to Menu'
        />

        <Button onClick={closeSettings} icon='times' title='Close' />
      </div>

      <ConfirmDialog
        open={confirmQuit}
        text='Are you sure you want to quit? You will lose all progress...'
        onClose={() => setConfirmQuit(false)}
        confirm={resetGameState}
      />
    </Dialog>
  );
};

const actions = { resetGameState, closeSettings };

export default connect(null, actions)(SettingsDialog);
