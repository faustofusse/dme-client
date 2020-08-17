import { SET_NOTIFICATION } from '../../constants';

export const setNotification = (type,msg) => {
    return ({
        type: SET_NOTIFICATION,
        payload: { type, msg}
    });
}