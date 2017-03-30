/**
 * MyLib/ToolBoxContainer selectors
 */

import { createSelector } from 'reselect';

/**
 * Direct selector to the MyLib.toolBoxContainer state domain
 */
const selectToolboxcontainer = () => (state) => state.MyLib.toolBoxContainer;

/**
 * Other specific selectors
 */
const selectName = () => createSelector(
  selectToolboxcontainer(),
  (toolBoxContainerState) => toolBoxContainerState.name
);

export default selectToolboxcontainer;

export { selectName };
