import React, { useEffect, useRef, useState } from 'react';

import Container, { HeaderBar, Letter, Kick, Button } from './style';
import { LogsCard } from '../../components';
import { RequestGetLogs } from '../../services/api';

const Game = () => {
  const kickRef = useRef();

  const [matched, setMatched] = useState([]);

  const words = 'ANIMAL'.split('');

  // const getAllLogs = async () => {
  //   const res = await RequestGetLogs();
  //   setAllLogs(res.data);
  // }

  // useEffect(() => {
  //   getAllLogs()
  // }, [dispatch]);

  const submit = event => {
    event.preventDefault();
    const indexes = [];

    words.map((letter, index) => {
      if (letter === kickRef.current.value.toUpperCase()) {
        indexes.push(index);
      }
    })

    setMatched([...matched, ...indexes]);
    kickRef.current.value = '';
  }

  return (
    <Container type='submit' onSubmit={submit}>
      <HeaderBar>
        {words.map((letter, index) => (<Letter key={index} matched={matched} index={index}>{letter}</Letter>))}
      </HeaderBar>
      <Kick ref={kickRef}/>
      <Button onClick={submit}>CHUTAR</ Button>
    </Container>
  );
};

export default Game;
