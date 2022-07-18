import { Trans, useTranslation } from 'react-i18next';

import { ReactComponent as SpeakerSVG } from '../../assets/undraw-conference-speaker.svg';
import { ReactComponent as SponsorSVG } from '../../assets/undraw-progress-data.svg';
import * as S from './HelpUs.styles';

const InviteToDiscord = () => {
  const { t } = useTranslation();

  return (
    <S.Content>
      <S.SubTitle>
        <Trans i18nKey="helpUs.information" t={t} />
      </S.SubTitle>
      <S.Sections>
        <S.Section>
          <SpeakerSVG />
          <S.Button
            onClick={() => window.open('https://3ge0vm4oaer.typeform.com/to/QXF09pui', '_blank')}
          >
            <Trans i18nKey="helpUs.speakerButton" t={t} />
          </S.Button>
        </S.Section>

        <S.Section>
          <SponsorSVG />
          <S.Button
            onClick={() => window.open('https://3ge0vm4oaer.typeform.com/to/DHr16DBJ', '_blank')}
          >
            <Trans i18nKey="helpUs.sponsorButton" t={t} />
          </S.Button>
        </S.Section>
      </S.Sections>
    </S.Content>
  );
};

export default InviteToDiscord;
