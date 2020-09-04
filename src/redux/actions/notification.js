// import { SET_NOTIFICATION } from '../../constants';

import { SET_NOTIFICATION } from "./actionTypes";

export const setNotification = (type, msg) => {
    return ({
        type: SET_NOTIFICATION,
        payload: { type, msg }
    });
}