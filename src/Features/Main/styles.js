import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  section {
    flex: 1;
    height: 100vh;

    &:first-child {
      background: #BA0106;
    }

    &:last-child {
      background: #009711;
    }
  }
`;

export const HomeSection = styled.section`
  position: relative;
`;

export const PenaltySection = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
`;

export const ScoreSection = styled.div`
  position: absolute;
  bottom: 0;
  width: 33.33%;
  left: 33.33%;
`;

export const TimeScoreContent = styled.div`
  position: absolute;
  top: 5vh;
  width: 100%;
  left: 0;
`;

export const TimeScoreSection = styled.section`
  
`;

export const VisitSection = styled.section`
  position: relative;
`;
