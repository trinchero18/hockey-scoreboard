import React, { useEffect, useState } from 'react';
import { formatTime } from '../../Utils/timer.js';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import Looks5Icon from '@mui/icons-material/Looks5';

import { ButtonSection, Container, IconCustomTimer, Label, Middle } from './styles.js';

export const Timer = () => {
  const [currentTime, setCurrentTime] = useState(1200);
  const [mainIntervalId, setMainIntervalId] = useState(0);
  const [pausedTime, setPausedTime] = useState(0);

  useEffect(() => {
    if (currentTime === 0) {
      setPausedTime(0);
      resetTimer(pausedTime !== 0 ? pausedTime : 0);
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
    setPausedTime(currentTime);
    clearInterval(mainIntervalId);
  };

  const resetTimer = (seconds) => {
    setPausedTime(0);
    clearInterval(mainIntervalId);
    setCurrentTime(seconds);
  };

  const set20min = () => {
    setPausedTime(currentTime);
    clearInterval(mainIntervalId);
    setCurrentTime(1200);
  };

  const set15min = () => {
    setPausedTime(currentTime);
    clearInterval(mainIntervalId);
    setCurrentTime(900);
  };

  const setOvertime = () => {
    setPausedTime(currentTime);
    clearInterval(mainIntervalId);
    setCurrentTime(300);
  };

  const setDeathTime = () => {
    setPausedTime(currentTime);
    clearInterval(mainIntervalId);
    setCurrentTime(60);
  };

  const goBack = () => {
    setPausedTime(0);
    setCurrentTime(pausedTime);
    clearInterval(mainIntervalId);
  };

  return (
    <Container>
      <Label>{formatTime(currentTime)}</Label>
      <ButtonSection>
        <PlayCircleIcon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={startTimer} />
        <PauseCircleIcon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={stopTimer} />
        <Middle>
          <IconCustomTimer sx={{ color: '#FFFFFF' }} fontSize="large" onClick={set20min}>20</IconCustomTimer>
          <IconCustomTimer sx={{ color: '#FFFFFF' }} fontSize="large" onClick={set15min}>15</IconCustomTimer>
          <Looks5Icon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={setOvertime} />
          <LooksOneIcon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={setDeathTime} />
        </Middle>
        <div>
          <CancelIcon sx={{ color: '#FFFFFF' }} fontSize="large" onClick={goBack} />
        </div>
      </ButtonSection>
    </Container>
  );
};
