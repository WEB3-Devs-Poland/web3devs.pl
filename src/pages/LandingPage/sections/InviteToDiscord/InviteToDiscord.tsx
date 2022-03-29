import { Trans, useTranslation } from 'react-i18next';

import { SocialLinks } from 'config/header.config';

import * as S from './InviteToDiscord.styles';

const InviteToDiscord = () => {
  const { t } = useTranslation();
  const discordLink = SocialLinks.filter((item) => item.name === 'Discord')[0].link;

  return (
    <S.Content>
      <S.Title>
        <Trans i18nKey="firstPage.title" t={t}>
          First Polish community <br /> for <S.Colored>web3</S.Colored> developers.
        </Trans>
      </S.Title>
      <S.SubTitle>
        <Trans i18nKey="firstPage.subTitle" t={t} />
      </S.SubTitle>
      <S.Button onClick={() => window.open(discordLink, '_blank')}>
        <Trans i18nKey="firstPage.button" t={t} />
      </S.Button>
    </S.Content>
  );
};

export default InviteToDiscord;
