import {
  asyncCall, AsyncActionStatus, resetAsyncAction,
} from './asyncAction';

describe('utils/asyncAction', () => {
  describe('asyncCall', () => {
    it('dispatch on failed', (done) => {
      const type = 'type';
      const response = 'hello';
      const action = () => new Promise(resolve => resolve(response));
      const dispatch = jest.fn();
      asyncCall(type, action)(dispatch);
      expect(dispatch).toBeCalledWith({
        payload: null,
        status: AsyncActionStatus.STARTED,
        type,
      });
      dispatch.mockClear();
      setTimeout(() => {
        expect(dispatch).toBeCalledWith({
          payload: undefined,
          status: AsyncActionStatus.FAILED,
          type,
        });
        done();
      }, 500);
    });

    it('dispatch on success', (done) => {
      const type = 'type';
      const response = { status: 200, data: { outcome: 200 } };
      const action = () => new Promise(resolve => resolve(response));
      const dispatch = jest.fn();
      asyncCall(type, action)(dispatch);
      setTimeout(() => {
        expect(dispatch.mock.calls.length).toBe(2);
        expect(dispatch.mock.calls[0][0]).toEqual({
          payload: null,
          status: AsyncActionStatus.STARTED,
          type,
        });
        expect(dispatch.mock.calls[1][0]).toEqual({
          payload: response,
          status: AsyncActionStatus.SUCCEEDED,
          type,
        });
        done();
      }, 500);
    });

    it('dispatch on success with callback', (done) => {
      const type = 'type';
      const response = { status: 200, data: { outcome: 200 } };
      const action = () => new Promise(resolve => resolve(response));
      const dispatch = jest.fn();
      const resultCallback = 'test123';
      const callback = () => resultCallback;
      asyncCall(type, action, null, callback)(dispatch);
      setTimeout(() => {
        expect(dispatch.mock.calls.length).toBe(3);
        expect(dispatch.mock.calls[0][0]).toEqual({
          payload: null,
          status: AsyncActionStatus.STARTED,
          type,
        });
        expect(dispatch.mock.calls[1][0]).toEqual({
          payload: response,
          status: AsyncActionStatus.SUCCEEDED,
          type,
        });
        expect(dispatch.mock.calls[2][0]).toEqual(resultCallback);
        done();
      }, 500);
    });

    it('dispatch on with catch action', (done) => {
      const type = 'type';
      const action = () => new Promise((resolve, reject) => reject(new Error('error')));
      const dispatch = jest.fn();
      const resultCallback = 'test123';
      const callback = () => resultCallback;
      asyncCall(type, action, null, callback)(dispatch);
      setTimeout(() => {
        expect(dispatch.mock.calls.length).toBe(2);
        expect(dispatch.mock.calls[0][0]).toEqual({
          payload: null,
          status: AsyncActionStatus.STARTED,
          type,
        });
        expect(dispatch.mock.calls[1][0]).toEqual({
          payload: {
            message: 'Error: error',
          },
          status: AsyncActionStatus.FAILED,
          type,
        });
        done();
      }, 500);
    });

    it('resetAsyncAction ', () => {
      const type = 'type';
      const state = resetAsyncAction(type);
      expect(state).toEqual({
        type,
        status: AsyncActionStatus.UNSTARTED,
        payload: null,
      });
    });
  });
});
