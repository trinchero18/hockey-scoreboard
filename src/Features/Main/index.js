import React from 'react';

import { Timer } from '../../Components/Timer/Timer.js';
import { PenaltyTimer } from '../../Components/PenaltyTimer/PenaltyTimer.js';
import { Score } from '../../Components/Score/Score.js';

import { Container, HomeSection, PenaltySection, ScoreSection, TimeScoreContent, TimeScoreSection, VisitSection } from './styles.js';

export const Main = () => {

  return (
    <Container>
      <HomeSection>
        <PenaltySection>
          <PenaltyTimer />
          <PenaltyTimer />
        </PenaltySection>
      </HomeSection>
      <TimeScoreSection>
        <TimeScoreContent>
          <Timer />
        </TimeScoreContent>
      </TimeScoreSection>
      <ScoreSection>
        <Score />
      </ScoreSection>
      <VisitSection>
        <PenaltySection>
          <PenaltyTimer />
          <PenaltyTimer />
        </PenaltySection>
      </VisitSection>
    </Container>
  );
};
