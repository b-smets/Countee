import Expo from 'expo';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { RootStack } from './src/app/config/routes';
import { AuthProvider } from './src/app/modules/auth';

interface IState {
  fontLoaded: boolean;
}

export default class App extends React.Component<{}, IState> {

  state: IState = {
    fontLoaded: false,
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState(prevState => ({ fontLoaded: true }));
  }

  public render() {
    if (!this.state.fontLoaded) {
      return <Expo.AppLoading />;
    }

    return (
      <AuthProvider>
        <RootStack />
      </AuthProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
