import { AsyncStorage } from 'react-native';
import { IUser } from './types';

export const persistUser = (user: IUser) => AsyncStorage.setItem('user', JSON.stringify(user));
export const forgetUser = () => AsyncStorage.removeItem('user');
export const retrieveUser = () => AsyncStorage.getItem('user').then(user => JSON.parse(user) as IUser);
