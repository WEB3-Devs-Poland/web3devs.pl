import styled from 'styled-components';

export const CommunityMembers = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  text-align: center;
`;

export const Card = styled.div`
  min-width: 20rem;
  padding: 1.5rem 2rem;
  margin: 1rem;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.background};

  border-radius: 1rem;
  transition: 0.3s;
  box-shadow: ${({ theme }) => theme.text}25 0px 7px 29px 0px;

  :hover {
    transition: 0.3s;
    box-shadow: ${({ theme }) => theme.primary}25 0px 7px 29px 0px;
  }

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    min-width: 18rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MemberName = styled.div`
  margin-top: 0.5rem;

  font-weight: bold;
  font-size: 1.25rem;

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    margin-top: 0.25rem;
    font-size: 1rem;
  }
`;

export const MemberIMG = styled.img<{ $addBackground?: boolean }>`
  margin: auto;
  width: 7.5rem;
  height: auto;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.text}25 0px 7px 29px 0px; //opacity <- last two numbers of color

  background-color: ${({ theme, $addBackground }) => ($addBackground ? theme.white : 'transparent')};lasttwonumbersofcolorbackground-colorlasttwonumbersofcolorbackground-colorlasttwonumbersofcolorbackground-colorlasttwonumbersofcolorbackground-colorlasttwonumbersofcolorbackground-colorlasttwonumbersofcolorbackground-colorlasttwonumbersofcolorbackground-colorlasttwonumbersofcolorbackground-colorlasttwonumbersofcolorbackground-colorlasttwonumbersofcolorbackground-colorlasttwonumbersofcolorbackground-color

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    width: 6rem;
    margin: auto 0;
  }
`;

export const MemberRole = styled.div`
  margin: 1rem auto;
  padding: 0.25rem;

  color: ${({ theme }) => theme.white};
  font-weight: bold;
  font-size: 0.75rem;

  width: 75%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    margin: 0.25rem auto;
    padding: 0.25rem 0.5rem;

    width: auto;
  }
`;

export const MemberSocial = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin: 0 0.5rem;
    transition: 0.3s;

    font-size: 1.25rem;
    color: ${({ theme }) => theme.grey.first};

    :hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
