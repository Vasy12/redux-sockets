import { combineReducers } from 'redux';
import webSocketReducer from './webSocketReducer';

const rootReducer = combineReducers({
	webSocket: webSocketReducer,
});

export default rootReducer;
