import styled from "styled-components";

export const LoadingSpinner = styled.div`
  border: 6px solid #7e86b4;
  border-top: 6px solid #cccccc;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`