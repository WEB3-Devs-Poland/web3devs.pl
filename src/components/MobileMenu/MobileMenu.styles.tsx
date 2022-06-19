import styled from 'styled-components';

export const HorizontalSeparator = styled.div`
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.text};
`;

export const MobileMenu = styled.div`
  background-color: ${({ theme }) => theme.background};
  position: fixed;

  width: 100%;
  height: 100%;

  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  z-index: 10;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    font-size: 1.25rem;

    svg {
      font-size: 2rem;
    }
  }
`;

export const Navigation = styled.div`
  height: 80%;

  display: flex;
  text-align: center;
  flex-direction: column;

  a {
    margin: 25px auto;
  }
`;

export const Shortcuts = styled.div`
  height: 10%;
  line-height: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
