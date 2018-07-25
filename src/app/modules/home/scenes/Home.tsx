import { Container, Content, Text } from 'native-base';
import * as React from 'react';
import { AuthContext, IUserInfo } from '../../auth';

export const Home: React.SFC = () =>
  <Container>
    <Content>
      <AuthContext.Consumer>
        {
          ({ userInfo }) => {
            if (userInfo) {
              return (
                <Text>Logged in as {userInfo.name}</Text>
              );
            }
            return <Text>Not logged in</Text>;
          }
        }
      </AuthContext.Consumer>
    </Content>
  </Container>
  ;
