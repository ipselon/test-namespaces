import { combineReducers } from 'redux';
import frameContainerReducer from './containers/FrameContainer/reducer.js';
                
export default combineReducers({
    frameContainer: frameContainerReducer
});
