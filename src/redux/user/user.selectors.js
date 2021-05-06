import { createSelector } from 'reselect';

const selectUserReducer = state => state.user; 

export const selectInput = createSelector(
    [selectUserReducer],
    (user) => user.user_input
)