import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    user_input: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
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