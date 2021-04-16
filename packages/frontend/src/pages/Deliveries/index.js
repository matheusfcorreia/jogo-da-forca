import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container, { HeaderBar, StyledDeliveryList } from './style';
import { LogsCard } from '../../components';

import { Creators as deliveriesActions } from '../../store/ducks/deliveries';

const Logs = ({ status }) => {
  const dispatch = useDispatch();

  const deliveries = useSelector(s => s.deliveries.deliveries);
  const generalFilter = useSelector(s => s.deliveries.filters.general);
  const statusFilter = useSelector(s => s.deliveries.status);


  useEffect(() => {
    dispatch(deliveriesActions.getDeliveries());
  }, [dispatch, generalFilter, statusFilter]);

  return (
    <Container>
      <HeaderBar>
        Registros de Entrada
      </HeaderBar>
      <LogsList {...{ status, deliveries }} />
    </Container>
  );
};

const LogsList = ({ status, deliveries }) => {
  return (
    <StyledDeliveryList className={deliveries.length < 1 && 'empty'} empty={deliveries.length < 1}>
      {deliveries.map((delivery, key) => <LogsCard {...{ delivery, status, key }} />)}
      <LogsCard />
      <LogsCard />
      <LogsCard />
      <LogsCard />
      <LogsCard />
    </StyledDeliveryList>
  );
};

export default Logs;
