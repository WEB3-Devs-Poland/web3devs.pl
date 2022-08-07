import styled, { DefaultTheme } from 'styled-components';

interface StatusProps {
  status: 'idle' | 'error' | 'loading' | 'success';
}

const getColor = (theme: DefaultTheme, status: StatusProps['status']) => {
  const colors = {
    idle: theme.white,
    error: theme.red,
    loading: theme.white,
    success: theme.green,
  };

  return colors[status];
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const Status = styled.span<StatusProps>`
  color: ${({ theme, status }) => getColor(theme, status)};
  text-transform: uppercase;
`;
