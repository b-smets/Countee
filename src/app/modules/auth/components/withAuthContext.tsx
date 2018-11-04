import * as React from 'react';
import { getDisplayName, Omit } from '../../../util';
import { AuthContext, IAuthContext } from './AuthProvider';

export const withAuthContext = <InnerProps extends IAuthContext>(Component: React.ComponentType<InnerProps>) => {
  type OuterProps = Omit<InnerProps, keyof IAuthContext>;
  const Wrapper: React.SFC<OuterProps> = (props: OuterProps) => {
    return (
      <AuthContext.Consumer>
        {
          (authContext: IAuthContext) => <Component {...props} {...authContext} />
        }
      </AuthContext.Consumer>
    );
  };
  Wrapper.displayName = `withAuthContext(${getDisplayName(Component)})`;
  return Wrapper;
};
