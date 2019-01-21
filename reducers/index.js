import { combineReducers } from 'redux';
import TransReducer from './TransReducer';

export default combineReducers({
  trans: TransReducer
});
