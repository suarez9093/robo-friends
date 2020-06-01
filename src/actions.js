import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants';

export const setSearchField = (text) => ({
    // text referrs to the text the user types into the search field
    type: CHANGE_SEARCH_FIELD, // action that is being taken
    payload: text // sending the text the user typed to the reducer
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })).catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}