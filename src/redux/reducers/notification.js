import { SET_NOTIFICATION, NOTIFICATION_ERROR } from '../../constants';

const initialState = {
    type : '',
    msg : ''
}
export default function reducer(state = initialState, {type, payload}){
    switch (type) {
        case SET_NOTIFICATION:
            return payload
        default : 
            return state;

    }

}