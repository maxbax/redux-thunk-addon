import { combineReducers } from 'redux';
import { apiReducer } from 'redux-thunk-addon';
import { ACTIONS as exampleActions } from '../actions/example';

export default combineReducers({
  api: apiReducer([exampleActions]),
});
