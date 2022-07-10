import { RiCloseCircleLine } from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.red};
  border: 1px solid ${({ theme }) => theme.red};
  border-radius: 10px;
  width: 100%;
  min-height: 40px;
  padding: 0 20px;
`;

export const StyledRiCloseCircleLine = styled(RiCloseCircleLine)`
  width: 1.5rem;
  height: 1.5rem;
`;
