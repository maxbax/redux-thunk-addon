const ACTIONS = {
  ASYNC_CALL: 'ASYNC_CALL',
};

const handleAsyncCallAction = (apiResponseName, onSuccess) => ({
  type: ACTIONS.ASYNC_CALL,
  apiResponseName,
  onSuccess,
});

export {
  ACTIONS,
  handleAsyncCallAction,
};
