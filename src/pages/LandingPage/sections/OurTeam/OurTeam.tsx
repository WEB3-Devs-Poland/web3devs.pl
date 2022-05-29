import { useTranslation } from 'react-i18next';

import * as S from './OurTeam.styles';
import { ourTeamMembers } from './team.config';

const OurTeam = () => {
  const { t } = useTranslation();

  return (
    <S.Content>
      <S.Title>{t('ourTeam.title')}</S.Title>
      <S.Team>
        {ourTeamMembers.map((member) => (
          <S.Member key={member.name}>
            <S.MemberIMG src={member.img} />
            <S.Details>
              <S.MemberName>{member.name}</S.MemberName>
              <S.MemberRole>{member.role}</S.MemberRole>
              <S.MemberSocial>
                {member.social.map(({ link, Icon }) => (
                  <a href={link} key={link} target="blank">
                    <Icon />
                  </a>
                ))}
              </S.MemberSocial>
            </S.Details>
          </S.Member>
        ))}
      </S.Team>
    </S.Content>
  );
};

export default OurTeam;
