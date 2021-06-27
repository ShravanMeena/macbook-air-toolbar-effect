import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 500px;
  height: 140px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  transition: all 0.8s ease;

  display: flex;
  padding: 20px;
  flex-direction: column;
  &:hover {
    transition: all 0.8s ease;
  }
`;

export const Box = styled.div``;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 15px;
`;
export const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

export const Button = styled.button`
  width: 60px;
  height: 28px;
  border: none;
  padding: 5px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  border-radius: 10px;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1) translateY(-5px);
    margin: 0 1px;
  }
`;
