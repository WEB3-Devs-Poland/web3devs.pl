import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 2.75rem;

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    font-size: 1.75rem;
    width: 90%;
  }
`;

export const Cards = styled.div`
  margin-top: 2.5rem;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  max-width: 250px;
  padding: 1.5rem 2rem;
  margin: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 16rem;
    height: 16rem;
  }
`;

export const CardTitle = styled.div`
  margin-top: 1rem;

  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-weight: bold;
`;
