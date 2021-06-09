import { combineReducers } from 'redux';

import { default as socketReducer } from './socket';

const reducers = combineReducers({
  socket: socketReducer,
});

export default reducers;
