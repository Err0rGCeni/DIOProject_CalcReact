import styled, { keyframes } from "styled-components";

const neonEffect = keyframes`
  0% {
    box-shadow: 0 0 5px #fff, 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000;
  }
  50% {
    box-shadow: 0 0 5px #fff, 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000, 0 0 60px #ff0000;
  }
  100% {
    box-shadow: 0 0 5px #fff, 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000;
  }
`;

export const InputContainer = styled.div`
  width: 220px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  &.on {
    animation: ${neonEffect} 2s infinite alternate;
  }
`;

export const InputField = styled.div`
  width: 100%;
  height: 100%;
  background-color: #212121;
  border: none;
  padding: 8px;
  text-align: right;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.5s, background-color 0.25s;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;

  &.prev {
    font-size: 14px;
    color: #f00000;
  }

  &.current {
    font-size: 20px;
  }
`;
