import { USER_LOGIN } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  gravatarEmail: '',
  score: 0,
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return { ...state, gravatarEmail: action.payload };
  default:
    return state;
  }
};
export default playerReducer;
