import React, { useContext } from 'react';
import { SearchContext } from '../robotContext';

function SearchBar(props) {
    const { searchRobot } = useContext(SearchContext)
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={searchRobot} />
        </div>
    )
}

export default SearchBar;