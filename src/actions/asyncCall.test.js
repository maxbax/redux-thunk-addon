import {
  ACTIONS, handleAsyncCallAction,
} from './asyncCall';

describe('actions/asyncCall', () => {
  it('handleAsyncCallAction', () => {
    const apiResponseName = 'Test1';
    const onSuccess = 'Test2';
    const action = handleAsyncCallAction(apiResponseName, onSuccess);
    expect(action).toEqual({
      type: ACTIONS.ASYNC_CALL,
      apiResponseName,
      onSuccess,
    });
  });
});
