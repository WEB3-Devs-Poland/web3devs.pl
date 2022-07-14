import styled from 'styled-components';

import { BorderTypes, borderTypes } from './Button.helpers';

export const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: row;

  height: 50px;
  width: max-content;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.config.mobileBreakpoint}) {
    height: 40px;
  }
`;

export const Text = styled.div`
  transition: ${({ theme }) => theme.transition};
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 5px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  :hover {
    color: ${({ theme }) => theme.colors.primary2};
  }

  @media (max-width: ${({ theme }) => theme.config.mobileBreakpoint}) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export const Border = styled.div<{ borderType: BorderTypes }>`
  box-sizing: border-box;
  height: 50px;
  width: 25px;

  border-color: ${({ theme }) => theme.colors.primary2};
  border-width: ${({ borderType }) => borderTypes[borderType]};
  border-style: solid;

  @media (max-width: ${({ theme }) => theme.config.mobileBreakpoint}) {
    height: 40px;
  }
`;
