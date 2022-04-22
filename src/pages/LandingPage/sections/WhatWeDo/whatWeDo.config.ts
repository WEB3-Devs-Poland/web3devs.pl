import { ReactComponent as PairPrograming } from 'pages/LandingPage/assets/undraw-pair-programming.svg';
import { ReactComponent as ShareKnowledge } from 'pages/LandingPage/assets/undraw-version-control.svg';
import { ReactComponent as BuildTogether } from 'pages/LandingPage/assets/undraw-video-upload.svg';
import { useTranslation } from 'react-i18next';

type WhatWeDoCardsModel = {
  title: string;
  SVGComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

export const WhatWeDoCards = (): WhatWeDoCardsModel[] => {
  const { t } = useTranslation();

  return [
    {
      title: t('whatWeDo.cards.pairPrograming'),
      SVGComponent: PairPrograming,
    },
    {
      title: t('whatWeDo.cards.buildTogether'),
      SVGComponent: BuildTogether,
    },
    {
      title: t('whatWeDo.cards.shareKnowledge'),
      SVGComponent: ShareKnowledge,
    },
  ];
};
