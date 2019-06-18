import { AsyncActionStatus } from '../utils/asyncAction';

const initialState = { status: AsyncActionStatus.UNSTARTED };

const reduceAsyncActionStatusOf = type => (state = initialState, action) => {
  if (action.type === type) {
    return {
      status: action.status,
      payload: action.payload,
    };
  }
  return state;
};

const apiResponseReducers = {};

const addActionToReduce = (jsonActions) => {
  if (jsonActions && typeof jsonActions === 'object') {
    Object.keys(jsonActions).forEach((key) => {
      const action = jsonActions[key];
      apiResponseReducers[action] = reduceAsyncActionStatusOf(action);
    });
  }
};

export {
  reduceAsyncActionStatusOf,
  addActionToReduce,
  apiResponseReducers,
};
