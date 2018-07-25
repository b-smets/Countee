import { createStackNavigator } from 'react-navigation';
import { Login } from '../modules/auth';
import { Home } from '../modules/home';

export const RootStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
});
