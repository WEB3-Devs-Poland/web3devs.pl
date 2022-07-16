import styled from 'styled-components';

import { BorderTypes, borderTypes } from './Button.helpers';

export const Border = styled.div<{ borderType: BorderTypes }>`
  box-sizing: border-box;
  height: 50px;
  width: 25px;

  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary2};
  border-width: ${({ borderType }) => borderTypes[borderType]};

  @media (max-width: ${({ theme }) => theme.config.mobileBreakpoint}) {
    height: 40px;
  }
`;
