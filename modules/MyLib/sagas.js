import ToolBoxContainerSagas from './containers/ToolBoxContainer/sagas.js';
import MUIToolbarContainerSagas from './containers/MUIToolbarContainer/sagas.js';
export default [
    ...ToolBoxContainerSagas,
    ...MUIToolbarContainerSagas
];