const isResponseOk = response => (response && response.status === 200) || false;

const AsyncActionStatus = {
  UNSTARTED: 'UNSTARTED',
  STARTED: 'STARTED',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};

const startedAsyncAction = type => ({
  type,
  status: AsyncActionStatus.STARTED,
  payload: null,
});

const succeededAsyncAction = (type, payload) => ({
  type,
  status: AsyncActionStatus.SUCCEEDED,
  payload,
});

const failedAsyncAction = (type, error) => ({
  type,
  status: AsyncActionStatus.FAILED,
  payload: error,
});

const resetAsyncAction = type => ({
  type,
  status: AsyncActionStatus.UNSTARTED,
  payload: null,
});

const asyncCall = (type, action, args, onSuccessCallbackAction = null) => (dispatch) => {
  dispatch(startedAsyncAction(type));
  action(args)
    .then((response) => {
      if (isResponseOk(response)) {
        dispatch(succeededAsyncAction(type, response));
        if (onSuccessCallbackAction) {
          dispatch(onSuccessCallbackAction(type, response));
        }
      } else dispatch(failedAsyncAction(type, response.data));
    })
    .catch(error => dispatch(failedAsyncAction(type, { message: `${error}` })));
};

export {
  AsyncActionStatus,
  startedAsyncAction,
  succeededAsyncAction,
  failedAsyncAction,
  asyncCall,
  resetAsyncAction,
};
