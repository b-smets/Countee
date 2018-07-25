import * as React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Login } from '../modules/auth';
import { Home } from '../modules/home';

export interface IProps {
  loggedIn: boolean;
}

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
});

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
});

export const RootStack: React.SFC<IProps> = ({ loggedIn }) => {
  const StackNavigator = createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: loggedIn ? 'App' : 'Auth',
    },
  );
  return <StackNavigator />;
};
