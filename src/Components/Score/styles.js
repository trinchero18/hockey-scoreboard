import styled from "styled-components";

export const Buttons = styled.div`
  cursor: pointer;
`;

export const Container = styled.div`
  position: absolute;
  bottom: 5vh;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

export const InputName = styled.input`
  font-family: clock;
  font-size: 6vw;
  background: none;
  outline: none;
  width: 50%;
  text-transform: uppercase;
  text-align: center;
  border: none;
`;

export const Label = styled.label`
  font-family: clock;
  font-size: 10vw;
  text-align: center;
`;

export const Names = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Number = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Scores = styled.div`
  display: flex;
  justify-content: center;
`;