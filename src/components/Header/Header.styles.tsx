import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 10px;
  height: 90px;
`;

export const Links = styled.div`
  display: flex;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  svg {
    padding: 5px 10px;
    font-size: 22px;
    color: ${({ theme }) => theme.text};

    cursor: pointer;
  }
`;
