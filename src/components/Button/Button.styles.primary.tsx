import styled from 'styled-components';

export const Button = styled.div`
  height: min-content;
  width: max-content;
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.config.radius};

  transition: ${({ theme }) => theme.transition};
  background-color: ${({ theme }) => theme.colors.primary2};

  :hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.colors.shadow};
    background-color: ${({ theme }) => theme.colors.primary3};
  }
`;
