import styled from "styled-components";

export const Button = styled.button`
  height: 60px;
  padding: 0 40px;
  border: none;
  border-radius: 12px;
  background-color: #7e86b4;
  color: #fff;
  font-size: 20px;

  &:hover {
    background-color: #666d93;
  }

  &:active {
    background-color: #3f4359;
  }

  &:disabled {
    background-color: #b6b6b6;
  }
`
