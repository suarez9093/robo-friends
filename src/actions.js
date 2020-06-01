import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchField = (text) => ({
    // text referrs to the text the user types into the search field
    type: CHANGE_SEARCH_FIELD, // action that is being taken
    payload: text // sending the text the user typed to the reducer
})