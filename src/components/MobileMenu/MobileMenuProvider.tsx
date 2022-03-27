import { createContext, useState } from 'react';

export type MobileMenuContextStateType = {
  isMenuOpen: boolean;
  changeMenuVisibility: () => void;
};

export const MobileMenuContext = createContext<MobileMenuContextStateType | null>(null);

interface Props {
  children: any;
}

const MobileMenuProvider = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeMenuVisibility = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, changeMenuVisibility }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuProvider;
