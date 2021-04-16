import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { StyledHeader } from './style';

import { Close } from '../../../assets/icons';

import { Creators as deliveriesActions } from '../../../store/ducks/deliveries';

const Header = () => {
  const dispatch = useDispatch();

  const status = useSelector(s => s.deliveries.status);

  const closeModal = () => {
    dispatch(deliveriesActions.setSelectedDelivery(null));
  };

  return (
    <StyledHeader status={status} >
      <p>ENTREGA {status === 'delivered' ? 'FINALIZADA' : 'ABERTA'}</p>
      <Close onClick={closeModal} />
    </StyledHeader>
  );
};

export default Header;