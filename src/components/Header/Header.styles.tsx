import styled from 'styled-components';

import { LanguageSwitch } from 'components/ChangeLanguage/ChangeLanguage.styles';
import { ThemeSwitch } from 'components/ChangeTheme/ChangeTheme.styles';

export const VerticalSeparator = styled.div`
  width: 2px;
  height: 1.5rem;
  margin: 0 15px;
  background-color: ${({ theme }) => theme.text};
`;

export const Header = styled.div`
  margin: auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};

  height: ${({ theme }) => theme.hederHeight}px;

  font-weight: bold;
  font-size: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${ThemeSwitch}, ${LanguageSwitch} {
    width: 28px;
    margin: 0 10px;
  }

  svg {
    transition: 0.3s;

    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};

    :hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  a,
  p {
    display: flex;
    align-items: center;
    cursor: pointer;

    transition: 0.3s;
    text-decoration: none;

    margin: 0 10px;
    color: ${({ theme }) => theme.text};

    :hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    svg {
      font-size: 2.5rem;
    }
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 4rem;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
