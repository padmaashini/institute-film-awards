import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    user_input: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_USER_INPUT: 
            return {
                ...state,
                user_input: action.payload
            };
        default: 
            return state; 
    }
}

export default userReducer; 