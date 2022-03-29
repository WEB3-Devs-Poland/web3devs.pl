import styled from 'styled-components';

export const Background = styled.div`
  max-width: ${({ theme }) => theme.contentWidth}px;
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.background};
`;

export const HorizontalSeparator = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.text};
`;

export const MobileMenuWrapper = styled.div`
  margin: auto;
  align-items: center;

  padding: 0 10px;
  height: 90px;

  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};

  svg {
    transition: 0.3s;
    font-size: 32px;
    color: ${({ theme }) => theme.text};

    :hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  a {
    text-decoration: none;
    transition: 0.3s;

    padding: 0px 25px;
    color: ${({ theme }) => theme.text};

    :hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const MenuItem = styled.div`
  width: 100%;
  margin: auto;
  padding: 25px 0;

  display: flex;
  justify-content: center;
`;

export const NavigationMenu = styled.div`
  height: 70vh;
  background-color: ${({ theme }) => theme.background};
`;

export const Settings = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 0 12.5%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  line-height: 2rem;
  height: 10vh;
`;

export const Social = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 0 12.5%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  line-height: 2rem;
  height: 10vh;
`;
