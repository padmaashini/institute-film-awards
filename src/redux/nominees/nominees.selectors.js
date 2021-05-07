import { createSelector } from 'reselect';

const selectNomineesReducer = state => state.nominees; 

export const selectNominees = createSelector(
    [selectNomineesReducer],
    (nominees) => nominees.nomineesList
);