import styled from "styled-components";

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 20px;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 22%;
  height: 15vh;
  background: none;
  outline: none;
  border: 1px #830004 solid;
  font-family: 'clock';
  font-size: 8vw;
  color: white;
  margin-left: 20px;
  margin-right: 10%;
`;

export const Label = styled.label`
  font-family: 'clock';
  font-size: 10vw;
  color: white;
  text-align: center;
  margin-left: 60px;
`;
