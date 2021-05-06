import { createSelector } from 'reselect';

const selectUserReducer = state => state; 

export const selectInput = createSelector(
    [selectUserReducer],
    (state) => state.user_input
)