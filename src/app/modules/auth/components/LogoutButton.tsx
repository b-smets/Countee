import { Button, Text } from 'native-base';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { logout } from '../api';

export const LogoutButton = () => {
  return (
    <Button
      full
      textStyle={{ textTransform: 'uppercase' }}
      onPress={logout}>
      <Text>
        <FormattedMessage id='module.auth.logoutbutton.button.logout' />
      </Text>
    </Button>
  );
};

LogoutButton.displayName = 'LogoutButton';
