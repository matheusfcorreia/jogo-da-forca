import produce from 'immer';
import { createActions, createReducer } from 'reduxsauce'; 

const STATE = {
  socket: null,
};

export const { Types, Creators } = createActions({
  setSocket: ['socket'],
});

const setSocket = (state = STATE, action) => {
  return produce(state, s => {
    s.socket = action.socket;
  });
}

export default createReducer(STATE, {
  [Types.SET_SOCKET]: setSocket,
})