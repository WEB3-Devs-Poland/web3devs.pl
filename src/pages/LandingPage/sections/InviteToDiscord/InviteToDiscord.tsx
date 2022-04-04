import { SocialLinks } from 'pages/LandingPage/components/Header/header.config';
import { Trans, useTranslation } from 'react-i18next';

import * as S from './InviteToDiscord.styles';

const InviteToDiscord = () => {
  const { t } = useTranslation();
  const discordLink = SocialLinks.filter((item) => item.name === 'Discord')[0].link;

  return (
    <S.Content>
      <S.Title>
        <Trans i18nKey="inviteToDiscord.title" t={t}>
          First Polish community <br /> for <S.Colored>web3</S.Colored> developers.
        </Trans>
      </S.Title>
      <S.SubTitle>
        <Trans i18nKey="inviteToDiscord.subTitle" t={t} />
      </S.SubTitle>
      <S.Button onClick={() => window.open(discordLink, '_blank')}>
        <Trans i18nKey="inviteToDiscord.button" t={t} />
      </S.Button>
    </S.Content>
  );
};

export default InviteToDiscord;
