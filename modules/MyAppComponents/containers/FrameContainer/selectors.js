/**
 * MyAppComponents/FrameContainer selectors
 */

import { createSelector } from 'reselect';

/**
 * Direct selector to the MyAppComponents.frameContainer state domain
 */
const selectFramecontainer = () => (state) => state.MyAppComponents.frameContainer;

/**
 * Other specific selectors
 */
const selectName = () => createSelector(
  selectFramecontainer(),
  (frameContainerState) => frameContainerState.name
);

export default selectFramecontainer;

export { selectName };
