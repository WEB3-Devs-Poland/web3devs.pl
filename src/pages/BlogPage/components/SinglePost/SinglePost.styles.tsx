import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
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

export const SinglePost = styled(Markdown)`
  text-align: left;
  width: 60%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    width: 90%
  }

  img {
    width: 70%;
    height: auto;
    margin: 16px auto;
  }

  h1,h2,h3,h4,h5,h5,h6 {
    margin: 16px 0;
    font-weight: bold;
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1rem;
  }

  p {
    margin: 16px 0;
  }

  ul {
    list-style-type: circle;
    margin-left: 32px;

    li {
      margin: 4px 0;
    }
  }

  ol {
    list-style-type: upper;
    margin-left: 32px;

    li {
      margin: 4px 0;
    }
  }

  a {
    color: purple
  }

  strong {
    font-weight: 700
  }
`;
