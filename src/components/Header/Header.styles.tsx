import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
  height: 90px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Links = styled.div`
  font-size: 18px;
  font-weight: bold;

  a {
    padding: 0 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    transition: 0.3s;

    :hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;

export const Social = styled.div`
  padding-left: 50px;

  svg {
    padding: 0px 10px;
    font-size: 22px;
    color: ${({ theme }) => theme.text};
    transition: 0.3s;

    :hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;
