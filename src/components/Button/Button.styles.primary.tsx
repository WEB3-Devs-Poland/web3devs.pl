import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;

export const Button = styled.div`
  height: min-content;
  width: max-content;
  padding: 10px 15px;

  background-size: 400% 400%;
  animation: ${animation} 3s ease infinite;
  transition: ${({ theme }) => theme.transition};
  background-image: ${({ theme }) => theme.colors.gradient2};

  :hover {
    transform: scale(1.1);
  }
`;
