import * as S from './CommunityPage.styles';
import { ourCommunityMembers } from './community.config';

const CommunityPage = () => {
  return (
    <S.Content>
      {ourCommunityMembers.map((member) => (
        <S.Card key={member.name}>
          <S.MemberIMG src={member.img} $addBackground={member.addBackground} />
          <S.MemberName>{member.name}</S.MemberName>
          <S.MemberSocial>
            {member.social.map(({ link, Icon }) => (
              <a href={link} key={link} target="blank">
                <Icon />
              </a>
            ))}
          </S.MemberSocial>
        </S.Card>
      ))}
    </S.Content>
  );
};

export default CommunityPage;
