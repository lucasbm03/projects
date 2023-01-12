import { LOGIN_CLICK } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_CLICK:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
