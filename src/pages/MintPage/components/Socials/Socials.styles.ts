import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 16px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Link = styled.a`
  font-size: 20px;
  height: auto;
  color: ${({ theme }) => theme.white};
`;
