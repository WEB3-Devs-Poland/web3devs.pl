import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;

  height: ${({ theme }) => theme.config.hederHeight};
  max-width: ${({ theme }) => theme.config.maxContentWidth};
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const VerticalSeparator = styled.div`
  width: 2px;
  margin: 0 10px;
  height: ${({ theme }) => theme.fontSizes.xxl};
  background-color: ${({ theme }) => theme.colors.black};
`;
