import styled from 'styled-components';

export const VerticalSeparator = styled.div`
  width: 2px;
  height: 20px;
  margin: 0 15px;
  background-color: ${({ theme }) => theme.text};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
  height: 90px;

  font-size: 18px;
  font-weight: bold;

  svg {
    transition: 0.3s;
    font-size: 22px;
    color: ${({ theme }) => theme.text};

    :hover {
      color: ${({ theme }) => theme.secondary};
    }
  }

  a {
    text-decoration: none;
    transition: 0.3s;

    padding: 0px 15px;
    color: ${({ theme }) => theme.text};

    :hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Settings = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};

  svg {
    padding: 0px 15px;
  }
`;

export const Mobile = styled.div`
  padding: 10px;

  svg {
    font-size: 32px;
  }
`;
