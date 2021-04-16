import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

const initialState = { hello: 'oi' };

export const { Types, Creators: ErrorCreators } = createActions({
  newError: ['name', 'msg'],
  removeError: ['name'],
});

const newError = (state = initialState, action) => {
  const { name, msg } = action;
  return produce(state, s => {
    s[name] = msg;
  });
};

const removeError = (state = initialState, action) => {
  const { name } = action;

  return produce(state, s => {
    delete s[name];
  });
};

export default createReducer(initialState, {
  [Types.NEW_ERROR]: newError,
  [Types.REMOVE_ERROR]: removeError,
});
