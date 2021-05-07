import { NomineesActionTypes } from './nominees.types';

export const addNomineeToState = (nominee) => ({
    type: NomineesActionTypes.ADD_NOMINEE,
    payload: nominee
})

export const removeNomineeFromState = (nominee) => ({
    type: NomineesActionTypes.REMOVE_NOMINEE,
    payload: nominee
})