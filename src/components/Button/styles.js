import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd700;
  border: none;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffef00;
  }

  &:active {
    box-shadow: 0 0 5px #fff, 0 0 5px #ffee00, 0 0 10px #ffee00, 0 0 20px #ffee00;
    transition: all 0.25s;
  }

  &.operator {
    color: #fff;
    background-color: #00C853;
  }

  &.operator:hover {
    background-color: #00E676;
  }

  &.operator:active {
    box-shadow: 0 0 5px #fff, 0 0 10px #00ff11, 0 0 20px #00ff11, 0 0 40px #00ff11;
    transition: all 0.25s;
  }

  &.special {
    color: #fff;
    background-color: #0053C8;
  }

  &.special:hover {
    background-color: #0076E6;
  }

  &.special:active {
    box-shadow: 0 0 5px #fff, 0 0 10px #0011ff, 0 0 20px #0011ff, 0 0 40px #0011ff;
    transition: all 0.25s;
  }

  &.disabled, &.disabled:hover, &.disabled:active {
    background-color: #ffffff05;
    box-shadow: none;
  }
`;
