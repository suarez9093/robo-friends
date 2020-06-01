import React, { useState, createContext } from 'react';
import { robots } from './robots';
const SearchContext = createContext();


function RobotContextProvider(props) {
    const [searchInput, setSearchInput] = useState("");
    const [robot, setRobot] = useState(robots);

    function searchRobot(e) {
        const { value } = e.target
        setSearchInput(value)
    }



    const filteredRobot = robot.filter(robot => robot.username.toLowerCase().includes(searchInput))


    return (

        <SearchContext.Provider value={{ filteredRobot, searchRobot }}>
            {props.children}
        </SearchContext.Provider>
    )
}
export { RobotContextProvider, SearchContext };