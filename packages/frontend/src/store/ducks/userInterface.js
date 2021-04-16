import produce from 'immer';
import { createActions, createReducer } from 'reduxsauce'; 

const STATE = {
  loading: false,
};

export const { Types, Creators } = createActions({
  setLoading: ['value'],
});

const setLoading = (state = STATE, action) => {
  return produce(state, s => {
    s.loading = action.value;
  });
}

export default createReducer(STATE, {
  [Types.SET_LOADING]: setLoading,
})