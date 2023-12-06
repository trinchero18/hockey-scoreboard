import React, { useEffect, useState } from 'react';
import { formatTime } from '../../Utils/timer.js';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks5Icon from '@mui/icons-material/Looks5';

import { ButtonSection, Container, Input, Label } from './styles.js';

export const PenaltyTimer = () => {
  const [player, setPlayer] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [mainIntervalId, setMainIntervalId] = useState(0);

  useEffect(() => {
    if (currentTime === 0) {
      resetTimer();
    };
  }, [currentTime]);

  const startTimer = () => {
    clearInterval(mainIntervalId);

    let id = setInterval(() => {
      setCurrentTime((count) => count - 1);
    }, 1000);
    
    setMainIntervalId(id);
  };
  
  const stopTimer = () => {
    clearInterval(mainIntervalId);
  };

  const resetTimer = () => {
    clearInterval(mainIntervalId);
    setPlayer('');
    setCurrentTime(0);
  };

  const changePenalty = (time) => {
    clearInterval(mainIntervalId);
    setCurrentTime(time);
  };
  
  const changePlayer = (number) => {
    setPlayer(number);
  };

  return (
    <Container>
      {
        /*
          <Input value={player} onChange={(e) => changePlayer(e.currentTarget.value)} />
        */
      }
      <Label>{formatTime(currentTime)}</Label>
      {
        currentTime !== 0 ?
        <ButtonSection>
          <PlayCircleIcon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={startTimer} />
          <PauseCircleIcon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={stopTimer}/>
          <ChangeCircleIcon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={resetTimer}/>
        </ButtonSection>
        :
        <ButtonSection>
          <LooksTwoIcon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={() => changePenalty(120)} />
          <Looks5Icon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={() => changePenalty(300)} />
        </ButtonSection>
      }
    </Container>
  );
};
