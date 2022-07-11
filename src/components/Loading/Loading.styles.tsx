import { RiLoader4Fill } from 'react-icons/ri';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(RiLoader4Fill)`
  animation: ${rotate360} 1s linear infinite;
  color: ${({ theme }) => theme.primary};
  font-size: 32px;
`;
