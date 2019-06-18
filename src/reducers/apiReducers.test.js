import apiReducer from './apiReducers';

jest.mock('redux', () => ({
  combineReducers: args => args,
}));

jest.mock('./asyncActions', () => ({
  reduceAsyncActionStatusOf: args => args,
}));

describe('reducers/apiReducers', () => {
  describe('invalid params ', () => {
    it('no actions passing', () => {
      const reducer = apiReducer([]);
      expect(reducer).toEqual({});
    });

    it('null params passing', () => {
      const reducer = apiReducer(null);
      expect(reducer).toEqual({});
    });

    it('wrong type params passing', () => {
      const reducer = apiReducer('Test');
      expect(reducer).toEqual({});
    });

    it('wrong type actions params passing', () => {
      const reducer = apiReducer(['Test']);
      expect(reducer).toEqual({});
    });
  });

  describe('valid params ', () => {
    it('passing correct actions', () => {
      const actions = {
        action1: 'action1',
        action2: 'action2',
      };
      const reducer = apiReducer([actions]);
      expect(reducer).toEqual(actions);
    });

    it('passing correct multiple actions', () => {
      const actionsA = {
        action1: 'action1',
        action2: 'action2',
      };
      const actionsB = {
        action3: 'action3',
        action4: 'action4',
      };
      const reducer = apiReducer([actionsA, actionsB]);
      expect(reducer).toEqual({ ...actionsA, ...actionsB });
    });
  });
});
