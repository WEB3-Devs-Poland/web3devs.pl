import { SocialLinks } from '../Header/header.config';
import * as S from './Socials.styles';

export const Socials = () => {
  return (
    <S.Container>
      {SocialLinks.map(({ Icon, name, link }) => (
        <S.Link key={name} href={link} target="blank">
          <Icon />
        </S.Link>
      ))}
    </S.Container>
  );
};
