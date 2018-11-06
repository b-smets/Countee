import { Body, Container, Content, Header, Title } from 'native-base';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { LogoutButton } from '../../auth/components/LogoutButton';
import { UserCard } from '../components/UserCard';

export const Profile: React.SFC = () =>
  <Container>
    <Header>
      <Body>
        <Title><FormattedMessage id='scene.profile.title' /></Title>
      </Body>
    </Header>
    <Content>
      <UserCard />
      <LogoutButton />
    </Content>
  </Container>
  ;
