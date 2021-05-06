import { UserActionTypes } from './user.types';

export const setUserInput = input => {
    return {
        type: UserActionTypes.SET_USER_INPUT, 
        payload: input
    }
};