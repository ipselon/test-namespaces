/**
 * MyLib/MUIToolbarContainer selectors
 */

import { createSelector } from 'reselect';

/**
 * Direct selector to the MyLib.muiToolbarContainer state domain
 */
const selectMuitoolbarcontainer = () => (state) => state.MyLib.muiToolbarContainer;

/**
 * Other specific selectors
 */
const selectName = () => createSelector(
  selectMuitoolbarcontainer(),
  (muiToolbarContainerState) => muiToolbarContainerState.name
);

export default selectMuitoolbarcontainer;

export { selectName };
