import { SET_USER } from '../actions/actionTypes';

const initialState = {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            // MODIFICAR ESTO, USAR Object.assign CREO
            return { ...state, 
                _id: action.user._id,
                firstName: action.user.firstName, 
                lastName: action.user.lastName,
                email: action.user.email,
                username: action.user.username,
                image: action.user.image
            }
        default:
            return state;
    }
}

export default reducer;