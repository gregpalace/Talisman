import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/Button';
import Dialog from '../../../components/Dialog';
import ShopKeep from '../../../components/ShopKeep';
import closeDialog from '../actions/closeDialog';

import './styles.scss';

const ShopDialog = ({ closeDialog }: any) => {
  const [welcome, setWelcome] = useState(true);

  if (welcome) {
    return (
      <Dialog>
        <div className='flex-column space-between flex-1'>
          <span className='shop-dialog__title'>{'Shop'}</span>

          <div className='flex-row'>
            <ShopKeep />

            <span className='flex-column shop-dialog__text'>
              {'Welcome traveler! Please, come in...'}
            </span>
          </div>

          <div className='flex-row shop-dialog__button'>
            <Button
              small
              onClick={closeDialog}
              icon='walking'
              title={'Leave'}
            />

            <Button
              small
              onClick={() => setWelcome(false)}
              icon='angle-double-right'
              title={'Shop'}
            />
          </div>
        </div>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <div className='flex-column shop-dialog__container'>
        <div className='flex-row shop-dialog__button'>
          <Button small onClick={closeDialog} icon='walking' title={'Leave'} />
        </div>
      </div>
    </Dialog>
  );
};

const actions = { closeDialog };

export default connect(null, actions)(ShopDialog);
