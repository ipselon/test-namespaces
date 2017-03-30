import { combineReducers } from 'redux';
import toolBoxContainerReducer from './containers/ToolBoxContainer/reducer.js';
import muiToolbarContainerReducer from './containers/MUIToolbarContainer/reducer.js';
export default combineReducers({
    toolBoxContainer: toolBoxContainerReducer,
    muiToolbarContainer: muiToolbarContainerReducer
});