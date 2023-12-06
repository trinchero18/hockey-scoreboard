import React, { useState } from "react";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

import { Buttons, Container, InputName, Label, Names, Number, Scores } from './styles';

export const Score = () => {
  const [homeTeam, setHomeTeam] = useState('');
  const [visitTeam, setVisitTeam] = useState('');
  const [homeScore, setHomeScore] = useState(0);
  const [visitScore, setVisitScore] = useState(0);

  const updateScoreHome = (math) => {
    if (math === 'add') setHomeScore(homeScore + 1);
    else setHomeScore(homeScore - 1);
  };

  const updateScoreVisit = (math) => {
    if (math === 'add') setVisitScore(visitScore + 1);
    else setVisitScore(visitScore - 1);
  };

  const resetScore = () => {
    setHomeScore(0);
    setVisitScore(0);
    setHomeTeam('');
    setVisitTeam('');
  };

  const handleChange = (value, team) => {
    if (team === 'home') setHomeTeam(value);
    if (team === 'visit') setVisitTeam(value);
  };

  return (
    <Container>
      <Names>
        <InputName maxLength="3" value={homeTeam} placeholder="---" onChange={(e) => handleChange(e.currentTarget.value, 'home')} />
        <InputName maxLength="3" value={visitTeam} placeholder="---" onChange={(e) => handleChange(e.currentTarget.value, 'visit')} />
      </Names>
      <Scores>
        <Number>
          <Label>{homeScore}</Label>
          <Buttons>
            <AddCircleIcon fontSize="large" onClick={() => updateScoreHome('add')} />
            <RemoveCircleIcon fontSize="large" onClick={() => updateScoreHome('sub')} />
          </Buttons>
        </Number>
        <Number>
          <Label>-</Label>
          <Buttons>
            <ChangeCircleIcon fontSize="large" onClick={resetScore} />
          </Buttons>
        </Number>
        <Number>
          <Label>{visitScore}</Label>
          <Buttons>
            <AddCircleIcon fontSize="large" onClick={() => updateScoreVisit('add')} />
            <RemoveCircleIcon fontSize="large" onClick={() => updateScoreVisit('sub')} />
          </Buttons>
        </Number>
      </Scores>
    </Container>
  );
};
