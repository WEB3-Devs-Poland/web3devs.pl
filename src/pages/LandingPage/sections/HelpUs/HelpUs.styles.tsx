import styled from 'styled-components';

export const Content = styled.div`
  margin-bottom: 5rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Colored = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.primary};
`;

export const SubTitle = styled.div`
  font-size: 1.75rem;
  margin: 2.5rem auto;

  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    font-size: 1rem;

    margin: 1.5rem auto;
    max-width: 80%;
  }
`;

export const Sections = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: 25px 50px;

  svg {
    margin-bottom: 1rem;
    max-height: 12rem;
    max-width: 12rem;
  }
`;

export const Button = styled.button`
  min-width: 200px;
  cursor: pointer;
  padding: 15px 25px;
  margin: 10px 20px;

  border: none;
  border-radius: 10px;

  font-size: 0.9rem;
  transition: 0.3s;

  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.primary};

  :hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.background};
  }
`;
