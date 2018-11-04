import { AppLoading, Font } from 'expo';
import * as React from 'react';
import { RootStack } from './config/routes';
import { AuthContext, AuthProvider } from './modules/auth';

interface IState {
  fontLoaded: boolean;
}

export class App extends React.Component<{}, IState> {

  state: IState = {
    fontLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState(() => ({ fontLoaded: true }));
  }

  public render() {
    const { fontLoaded } = this.state;
    return (
      <AuthProvider>
        <AuthContext.Consumer>
          {
            ({ userInfo, subscribedForAuthChanges }) => {
              if (!fontLoaded || !subscribedForAuthChanges) {
                return <AppLoading />;
              }
              return <RootStack loggedIn={!!userInfo} />;
            }
          }
        </AuthContext.Consumer>
      </AuthProvider>
    );
  }
}
