import { ACTIONS } from '../actions/asyncCall';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ASYNC_CALL:
      return {
        apiResponseName: action.apiResponseName,
        onSuccess: action.onSuccess,
      };
    default:
      return state;
  }
};
