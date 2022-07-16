import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { Translation } from 'components/Translation';

import * as S from './InviteToDiscord.styles';

export const InviteToDiscord = () => {
  return (
    <S.Content>
      <Text type="title" bold>
        <Translation translationKey="inviteToDiscord.title">
          First Polish community for <br />
          <Text type="title" colored>
            WEB3
          </Text>
          developers.
        </Translation>
      </Text>

      <Text type="subtitle">
        <Translation translationKey="inviteToDiscord.subTitle" />
      </Text>

      <Button type="primary">
        <Translation translationKey="inviteToDiscord.button" />
      </Button>
    </S.Content>
  );
};
