import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Container, { HeaderBar, StyledDeliveryList } from './style';
import { LogsCard } from '../../components';
import { RequestGetLogs } from '../../services/api';

const Logs = ({ status }) => {
  const dispatch = useDispatch();
  const [allLogs, setAllLogs] = useState([]);

  const getAllLogs = async () => {
    const res = await RequestGetLogs();
    setAllLogs(res.data);
  }

  useEffect(() => {
    getAllLogs()
  }, [dispatch]);

  return (
    <Container>
      <HeaderBar>
        Registros de Entrada
      </HeaderBar>
      <LogsList {...{ status, allLogs }} />
    </Container>
  );
};

const LogsList = ({ allLogs }) => {
  return (
    <StyledDeliveryList >
      {allLogs.map((log, key) => <LogsCard {...{ log, key }} />)}
      {/* <LogsCard />
      <LogsCard />
      <LogsCard />
      <LogsCard />
      <LogsCard /> */}
    </StyledDeliveryList>
  );
};

export default Logs;
