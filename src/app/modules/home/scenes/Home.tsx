import { Container, Content, Text } from 'native-base';
import * as React from 'react';
import { IUser } from '../../auth';

export interface IProps {
  user: IUser;
}

export const Home: React.SFC<IProps> = ({ user }) =>
  <Container>
    <Content>
      <Text>Logged in as {user.name}</Text>
    </Content>
  </Container>
  ;
