import { SET_NOTIFICATION, REMOVE_NOTIFICATION, REMOVE_ERROR } from '../actions/actionTypes';

const initialState = { type : null, message : null, errors: [] }

export default function reducer(state = initialState, {type, payload}){
    switch (type) {
        case SET_NOTIFICATION: return payload;
        case REMOVE_NOTIFICATION: return initialState;
        case REMOVE_ERROR:
            let newState = Object.assign({}, state);
            const { [payload]: value, ...errors } = newState.errors;
            newState.errors = errors;
            return newState;
        default :  return state;
    }
}