import styled from 'styled-components';

export const Button = styled.div`
  margin: 0 10px;

  :after {
    content: '';
    display: block;
    border-bottom: solid 3px ${({ theme }) => theme.colors.primary2};
    transform: scaleX(0);
    transition: transform 250ms;
    transform-origin: 0% 50%;
  }

  :hover:after {
    transform: scaleX(1);
  }
`;
