import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 320px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(-30deg, #101010, #2a2a2a, #101010);
  border-radius: 10px;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
