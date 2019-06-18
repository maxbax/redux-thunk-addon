import { asyncCallAction } from 'redux-thunk-addon';
import { callApiOK, callApiKO } from '../api/example';

const ACTIONS = {
  EXAMPLE_API_OK: 'EXAMPLE_API_OK',
  EXAMPLE_API_KO: 'EXAMPLE_API_KO',
};

const callApiOKAction = args => asyncCallAction(
  ACTIONS.EXAMPLE_API_OK,
  callApiOK,
  args,
);

const callApiKOAction = args => asyncCallAction(
  ACTIONS.EXAMPLE_API_KO,
  callApiKO,
  args,
);

export {
  ACTIONS,
  callApiOKAction,
  callApiKOAction,
};
