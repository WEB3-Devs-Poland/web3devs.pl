import useIPFSNavigate from 'providers/IPFSRouter/hooks/useIPFSNavigate';
import { useTranslation } from 'react-i18next';
import { IoMdArrowBack } from 'react-icons/io';

import * as S from './CommunityPage.styles';
import { ourCommunityMembers } from './community.config';

const CommunityPage = () => {
  const { t } = useTranslation();
  const navigate = useIPFSNavigate();

  return (
    <S.Content>
      <S.TopLineContent>
        <S.BackButton onClick={() => navigate('/')}>
          <IoMdArrowBack /> {t('community.backButton')}
        </S.BackButton>
      </S.TopLineContent>
      <S.CommunityMembers>
        {ourCommunityMembers.map((member) => (
          <S.Card key={member.name}>
            <S.MemberIMG src={member.img} $addBackground={member.addBackground} />
            <S.Details>
              <S.MemberName>{member.name}</S.MemberName>
              <S.MemberRole>{member.bio}</S.MemberRole>
              <S.MemberSocial>
                {member.social.map(({ link, Icon }) => (
                  <a href={link} key={link} target="blank">
                    <Icon />
                  </a>
                ))}
              </S.MemberSocial>
            </S.Details>
          </S.Card>
        ))}
      </S.CommunityMembers>
    </S.Content>
  );
};

export default CommunityPage;
