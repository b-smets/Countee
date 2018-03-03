import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { root } from './reducers';

const enhancer = compose(applyMiddleware(thunk));
export const store = createStore(root, enhancer);
