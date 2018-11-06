import { Body, Card, CardItem, Left, Text } from 'native-base';
import * as React from 'react';
import { withAuthContext } from '../../auth';
import { IAuthContext } from '../../auth/components/AuthProvider';

export type IProps = IAuthContext;

const UserCardWrapped: React.SFC<IProps> = ({ userInfo }) => {
  if (!userInfo) {
    return <Text>Not logged in</Text>;
  }

  return (
    <Card>
      <CardItem>
        <Left>
          <Body>
            <Text>{userInfo.name || userInfo.email}</Text>
            {
              userInfo.name &&
              <Text note>{userInfo.email}</Text>
            }
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

UserCardWrapped.displayName = 'UserCard';

export const UserCard = withAuthContext(UserCardWrapped);
