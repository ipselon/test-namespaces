import expect from 'expect';
import frameContainerReducer from '../reducer';

describe('frameContainerReducer', () => {
  it('returns the initial state', () => {
    expect(frameContainerReducer(undefined, {})).toEqual({
      name: 'Sample Name'
    });
  });
});
