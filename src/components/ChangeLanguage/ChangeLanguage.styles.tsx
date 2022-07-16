import styled from 'styled-components';

export const CurrentLanguage = styled.div`
  cursor: pointer;
  margin: 0 10px;
  width: 30px;

  transition: ${({ theme }) => theme.transition};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  :hover {
    color: ${({ theme }) => theme.colors.primary2};
  }
`;
