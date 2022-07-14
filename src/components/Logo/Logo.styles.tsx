import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Logo = styled.img`
  cursor: pointer;

  height: ${({ theme }) => theme.config.hederHeight};
  width: ${({ theme }) => theme.config.hederHeight};
`;
