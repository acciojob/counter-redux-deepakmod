import { createStore } from 'redux';
import actions from './Reducers/CounterRedux.js';

const store = createStore(actions);

export default store;