import { NomineesActionTypes } from './nominees.types';
import { addNominee, removeNominee } from './nominees.utils';

const INITIAL_STATE = {
    nomineesList: []
}

const nomineeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case NomineesActionTypes.ADD_NOMINEE: 
            return {
                ...state,
                nomineesList: addNominee(state.nomineesList, action.payload)
            }
        case NomineesActionTypes.REMOVE_NOMINEE: 
            return {
                ...state,
                nomineesList: removeNominee(state.nomineesList, action.payload)
            }
        default: 
            return state; 
    }
}

export default nomineeReducer;