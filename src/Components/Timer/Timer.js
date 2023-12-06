import React, { useEffect, useState } from 'react';
import { formatTime } from '../../Utils/timer.js';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Looks5Icon from '@mui/icons-material/Looks5';

import { ButtonSection, Container, Label } from './styles.js';

export const Timer = () => {
  const [currentTime, setCurrentTime] = useState(1200);
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
    setCurrentTime(1200);
  };

  const setOvertime = () => {
    clearInterval(mainIntervalId);
    setCurrentTime(300);
  };

  return (
    <Container>
      <Label>{formatTime(currentTime)}</Label>
      <ButtonSection>
        <PlayCircleIcon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={startTimer} />
        <PauseCircleIcon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={stopTimer}/>
        <div>
          <ChangeCircleIcon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={resetTimer}/>
          <Looks5Icon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={setOvertime} />
        </div>
      </ButtonSection>
    </Container>
  );
};
