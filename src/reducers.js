import { CHANGE_SEARCH_FIELD } from './constants';



const initialState = {
    searchField: ""
}

// Reducer
export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // return { ...state, searchInput: action.payload } Same as the code below
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}