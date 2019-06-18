import { combineReducers } from 'redux';
import { reduceAsyncActionStatusOf } from './asyncActions';

const apiResponseReducers = {};

const addActionToReduce = (jsonActions) => {
  Object.keys(jsonActions).forEach((key) => {
    const action = jsonActions[key];
    apiResponseReducers[action] = reduceAsyncActionStatusOf(action);
  });
};

const apiReducer = (actions) => {
  if (actions && Array.isArray(actions)) {
    actions.map(action => typeof action === 'object' && addActionToReduce(action));
  }
  return combineReducers(apiResponseReducers);
};

export default apiReducer;
