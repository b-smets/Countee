import { StackNavigator } from 'react-navigation';
import { LoginContainer } from '../modules/auth';
import { HomeContainer } from '../modules/home';

export const RootStack = StackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      title: 'Login',
    },
  },
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      title: 'Home',
    },
  },
});
