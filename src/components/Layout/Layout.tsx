import * as S from './Layout.styles';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <S.LayoutWrapper>{children}</S.LayoutWrapper>;
};

export default Layout;
