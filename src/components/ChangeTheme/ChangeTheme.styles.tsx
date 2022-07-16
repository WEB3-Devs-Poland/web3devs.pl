import styled from 'styled-components';

export const CurrentTheme = styled.div`
  cursor: pointer;
  margin: 0 10px;

  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  svg {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  :hover {
    color: ${({ theme }) => theme.colors.primary2};
  }
`;
