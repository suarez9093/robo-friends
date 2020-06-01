import React from 'react';

function SearchBar(props) {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={props.searchRobot} />
        </div>
    )
}

export default SearchBar;