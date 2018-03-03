import { connect, MapStateToProps } from 'react-redux';
import { IStoreLayout } from '../../../redux';
import { IUser } from '../../auth';
import { Home } from './Home';

interface IStateProps {
  user: IUser;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IStoreLayout> = state => ({
  user: state.user,
});

export const HomeContainer = connect(mapStateToProps)(Home);
