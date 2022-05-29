import styled from 'styled-components';

export const Content = styled.div`
  margin-bottom: 10rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Title = styled.div`
  margin-top: 10rem;

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
  font-size: 1.25rem;
  margin: 2.5rem auto;

  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    font-size: 1rem;

    margin: 1.5rem auto;
    max-width: 80%;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem 2.5rem;

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
