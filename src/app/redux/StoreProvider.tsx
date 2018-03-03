import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const StoreProvider: React.SFC<React.Props<{}>> = ({ children }) =>
  <Provider store={store}>
    {children}
  </Provider>
  ;
StoreProvider.displayName = 'StoreProvider';
