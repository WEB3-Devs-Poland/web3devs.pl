import styled from 'styled-components';

export const Button = styled.div`
  margin: 0 10px;

  :after {
    content: '';
    display: block;
    margin-top: 1px;

    border-bottom: solid 3px ${({ theme }) => theme.colors.transparent};
    border-image: ${({ theme }) => theme.colors.gradient1};
    border-image-slice: 1;

    transform: scaleX(0);
    transform-origin: 0% 50%;
    transition: transform 250ms;
  }

  :hover:after {
    transform: scaleX(1);
  }
`;
