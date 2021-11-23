import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export const store = createStore(reducer, applyMiddleware(thunk));
export default store