import { combineReducers } from 'redux';

import { default as deliveriesReducer } from './deliveries';
import { default as userInterfaceReducer } from './userInterface';
import { default as errorsReducer } from './errors';

const reducers = combineReducers({
  deliveries: deliveriesReducer,
  userInterface: userInterfaceReducer,
  errors: errorsReducer,
});

export default reducers;
