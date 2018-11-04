import { Button, Footer, FooterTab, Icon } from 'native-base';
import * as React from 'react';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Login } from '../modules/auth';
import { Energy } from '../modules/energy';
import { Home } from '../modules/home';
import { Money } from '../modules/money';
import { Profile } from '../modules/profile';
import { Water } from '../modules/water';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
});

const appRoutes = [
  {
    name: 'Home',
    screen: Home,
    icon: 'cube',
  },
  {
    name: 'Money',
    screen: Money,
    icon: 'logo-usd',
  },
  {
    name: 'Water',
    screen: Water,
    icon: 'water',
  },
  {
    name: 'Energy',
    screen: Energy,
    icon: 'flash',
  },
  {
    name: 'Profile',
    screen: Profile,
    icon: 'contact',
  },
];

const AppStackNavigationComponent = ({ navigation }) => {
  return (
    <Footer>
      <FooterTab>
        {
          appRoutes.map(({ name, icon }, idx) =>
            <Button
              key={name}
              active={navigation.state.index === idx}
              onPress={() => navigation.navigate(name)}
            >
              <Icon name={icon} />
            </Button>,
          )
        }
      </FooterTab>
    </Footer>
  );
};

const appScreens = appRoutes.reduce((acc, { name, screen }) => {
  acc[name] = { screen };
  return acc;
}, {});

const AppStack = createBottomTabNavigator(
  appScreens,
  {
    tabBarComponent: AppStackNavigationComponent,
  },
);

export interface IProps {
  loggedIn: boolean;
}

export const RootStack: React.SFC<IProps> = ({ loggedIn }) => {
  const StackNavigator = createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: loggedIn ? 'App' : 'App',
    },
  );
  return <StackNavigator />;
};
