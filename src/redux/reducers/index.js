import { combineReducers } from 'redux';

import userReducer from './userReducer';
// import loadingReducer from './loading';
// import notificationReducer from './notification';

export default combineReducers({
    user: userReducer,
    // loading: loadingReducer,
    // notification: notificationReducer,
})