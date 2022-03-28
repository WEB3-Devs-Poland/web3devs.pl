import { useContext } from 'react';
import { RiMoonClearFill, RiSunLine } from 'react-icons/ri';

import RenderIf from 'components/RenderIf';
import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';

const ChangeTheme = () => {
  const { changeTheme, currentTheme } = useContext(ThemeStateContext) as ThemeStateContextType;
  return (
    <>
      <RenderIf isTrue={currentTheme === 'light'}>
        <RiSunLine onClick={changeTheme} />
      </RenderIf>

      <RenderIf isTrue={currentTheme === 'dark'}>
        <RiMoonClearFill onClick={changeTheme} />
      </RenderIf>
    </>
  );
};

export default ChangeTheme;
