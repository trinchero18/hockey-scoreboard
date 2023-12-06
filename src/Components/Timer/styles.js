import styled from "styled-components";

export const Label = styled.label`
  font-family: 'clock';
  font-size: 20vw;
  color: white;
  background: #000000;
  z-index: 999;
  width: 90vw;
  margin-left: 5vw;
  text-align: center;
`;

export const ButtonSection = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: calc(50% - 180px);
  z-index: 9999;
  display: flex;
  opacity: 0.3;

  div {
    margin-left: 50px;
  }

  &:hover {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
