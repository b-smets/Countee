import { Body, Container, Content, Header, Title } from 'native-base';
import * as React from 'react';
import { UserCard } from '../components/UserCard';

export const Profile: React.SFC = () =>
  <Container>
    <Header>
      <Body>
        <Title>Profile</Title>
      </Body>
    </Header>
    <Content>
      <UserCard />
    </Content>
  </Container>
  ;
