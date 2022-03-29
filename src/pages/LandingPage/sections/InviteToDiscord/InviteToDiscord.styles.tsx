import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  margin: 5rem auto 2.5rem auto;
  width: 75%;
  display: inline-block;

  text-align: center;
  font-weight: bold;
  font-size: 2.75rem;

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    font-size: 1.75rem;
    width: 90%;
  }
`;

export const Colored = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.primary};
`;

export const SubTitle = styled.div`
  margin: auto;
  width: 75%;
  max-width: 700px;

  font-size: 1.25rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    font-size: 1.25rem;
    width: 75%;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 2.5rem auto;
  padding: 1rem 2rem;

  border: none;
  border-radius: 10px;

  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};

  :active {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
