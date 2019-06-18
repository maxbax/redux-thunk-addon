import { ACTIONS } from '../actions/asyncCall';
import asyncCallReducers from './asyncCall';

describe('reducers/asyncCall', () => {
  it('ASYNC_CALL', () => {
    const apiResponseName = 'apiResponseName';
    const onSuccess = 'onSuccess';
    expect(asyncCallReducers({}, {
      type: ACTIONS.ASYNC_CALL,
      apiResponseName,
      onSuccess,
    })).toEqual({
      apiResponseName,
      onSuccess,
    });
  });

  it('others', () => {
    expect(asyncCallReducers({}, { type: 'test' })).toEqual({});
  });
});
