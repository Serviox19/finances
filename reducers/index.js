import { combineReducers } from 'redux';

export default combineReducers({
  data: () => [],
  trans: () => [
    {'id': 1, 'detail': '', 'price': ''},
    {'id': 2, 'detail': '', 'price': ''},
    {'id': 3, 'detail': '', 'price': ''},
    {'id': 4, 'detail': '', 'price': ''},
    {'id': 5, 'detail': '', 'price': ''},
    {'id': 6, 'detail': '', 'price': ''}
  ]
});
