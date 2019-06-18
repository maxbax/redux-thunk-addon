import {
  reduceAsyncActionStatusOf, addActionToReduce,
  apiResponseReducers,
} from './asyncActions';

describe('reducers/asyncActions', () => {
  describe('reduceAsyncActionStatusOf', () => {
    it('empty action', () => {
      const type = 'type';
      const action = {};
      const state = reduceAsyncActionStatusOf(type)({}, action);
      expect(state).toEqual({});
    });

    it('other action', () => {
      const type = 'type';
      const status = 'status';
      const action = {
        type: `${type}2`,
        status,
      };
      const state = reduceAsyncActionStatusOf(type)({}, action);
      expect(state).toEqual({});
    });

    it('correct action without payload', () => {
      const type = 'type';
      const status = 'status';
      const action = {
        type,
        status,
      };
      const state = reduceAsyncActionStatusOf(type)({}, action);
      expect(state).toEqual({
        status,
        payload: undefined,
      });
    });

    it('correct action with payload', () => {
      const type = 'type';
      const status = 'status';
      const payload = 'payload';
      const action = {
        type,
        status,
        payload,
      };
      const state = reduceAsyncActionStatusOf(type)({}, action);
      expect(state).toEqual({
        status,
        payload,
      });
    });
  });

  describe('addActionToReduce', () => {
    describe('wrong params', () => {
      it('empty params', () => {
        addActionToReduce(null);
        expect(apiResponseReducers).toEqual({});
      });

      it('wrong type params', () => {
        addActionToReduce([]);
        expect(apiResponseReducers).toEqual({});
      });
    });

    describe('correct params', () => {
      it('empty params', () => {
        addActionToReduce({});
        expect(apiResponseReducers).toEqual({});
      });

      it('correct action params', () => {
        const actions = {
          action1: 'action1',
          action2: 'action2',
        };
        addActionToReduce(actions);
        expect(apiResponseReducers).toEqual({
          action1: expect.any(Function),
          action2: expect.any(Function),
        });
      });
    });
  });
});
