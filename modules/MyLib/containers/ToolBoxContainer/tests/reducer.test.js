import expect from 'expect';
import toolBoxContainerReducer from '../reducer';

describe('toolBoxContainerReducer', () => {
  it('returns the initial state', () => {
    expect(toolBoxContainerReducer(undefined, {})).toEqual({
      name: 'Sample Name'
    });
  });
});
