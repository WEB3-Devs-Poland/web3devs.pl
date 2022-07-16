import { useContext } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

import { ThemeStateContext, ThemeStateContextType } from 'theme/Theme.provider';

import * as S from './ChangeTheme.styles';

export const ChangeTheme: React.FC = () => {
  const { changeTheme, isDarkTheme } = useContext(ThemeStateContext) as ThemeStateContextType;

  return <S.CurrentTheme onClick={changeTheme}>{isDarkTheme ? <RiMoonLine /> : <RiSunLine />}</S.CurrentTheme>;
};
