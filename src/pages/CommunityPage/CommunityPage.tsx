import BackButton from '../../components/BackButton/BackButton';
import * as S from './CommunityPage.styles';
import { ourCommunityMembers } from './community.config';

const CommunityPage = () => (
  <>
    <div className="my-8">
      <BackButton target="/" />
    </div>

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
  </>
);

export default CommunityPage;
