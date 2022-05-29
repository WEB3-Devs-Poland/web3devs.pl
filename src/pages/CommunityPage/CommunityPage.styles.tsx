import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  text-align: center;
`;

export const Card = styled.div`
  min-width: 200px;
  padding: 1.5rem 2rem;
  margin: 0 2rem 4rem;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.background};

  border-radius: 1rem;
  transition: 0.3s;
  box-shadow: ${({ theme }) => theme.text}25 0px 7px 29px 0px; //opacity <- last two numbers of color

  :hover {
    transition: 0.3s;
    box-shadow: ${({ theme }) => theme.primary}25 0px 7px 29px 0px; //opacity <- last two numbers of color: ;
  }
`;

export const MemberName = styled.div`
  margin-top: 0.5rem;

  font-weight: bold;
  font-size: 1.25rem;
`;

export const MemberIMG = styled.img<{ $addBackground?: boolean }>`
  background-color: ${({ theme, $addBackground }) =>
    $addBackground ? theme.white : 'transparent'};
  margin: auto;
  width: 7.5rem;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.text}25 0px 7px 29px 0px; //opacity <- last two numbers of color
`;

export const TopLineContent = styled.div`
  width: 90%;
  margin: 2.5rem 0;
`;

export const BackButton = styled.div`
  transition: 0.3s;
  cursor: pointer;
  font-size: 1.2rem;

  padding: 0.5rem;
  width: 100px;
  width: 12rem;

  display: flex;
  align-items: center;

  svg {
    padding: 0 0.5rem;
  }

  :hover {
    color: ${({ theme }) => theme.primary};
    transition: 0.3s;
  }
`;

export const MemberSocial = styled.div`
  svg {
    padding: 10px 5px 0;
    transition: 0.3s;

    font-size: 1.25rem;
    color: ${({ theme }) => theme.grey.first};

    :hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
