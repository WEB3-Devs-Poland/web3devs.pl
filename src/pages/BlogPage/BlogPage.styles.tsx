import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const TopLineContent = styled.div`
  width: 100%;
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

export const PostLinkContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const PostLink = styled.div`
  cursor: pointer;
  transition: 0.3s;
  margin-left: 20px;

  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const PostDate = styled.div`
  margin-left: 40px;
  color: ${({ theme }) => theme.grey.first};
`;
