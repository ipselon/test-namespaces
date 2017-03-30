import expect from 'expect';
import muiToolbarContainerReducer from '../reducer';

describe('muiToolbarContainerReducer', () => {
  it('returns the initial state', () => {
    expect(muiToolbarContainerReducer(undefined, {})).toEqual({
      name: 'Sample Name'
    });
  });
});
