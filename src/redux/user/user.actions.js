import { UserActionTypes } from './user.types';

export const setUserInput = input => {
    console.log('action', input)
    return {
        type: UserActionTypes.SET_USER_INPUT, 
        payload: input
    }
};