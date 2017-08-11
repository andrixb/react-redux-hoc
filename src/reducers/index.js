import { combineReducers } from 'redux';
import authenticated from './authentication.reducer';

const rootReducer = combineReducers({
    authenticated,
});

export default rootReducer;
