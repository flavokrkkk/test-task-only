import styled from "styled-components";

export const CounterWrapper = styled.div`
  margin-bottom: 15px;
  padding: 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1110px) {
    gap: 5px;
  }
`;
