import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
  playerReducer,
  gameReducer,
});
export default rootReducer;
