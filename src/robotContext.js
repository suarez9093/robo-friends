import React, { useState, createContext } from 'react';
import { robots } from './robots';
const SearchContext = createContext();


function RobotContextProvider(props) {
    const [searchInput, setSearchInput] = useState();
    const [robot, setRobots] = useState(robots);
    const [filteredRobot, setFilteredRobots] = useState(robots);


    function searchRobot(e) {
        const { value } = e.target
        setSearchInput(value.toLowerCase())
        console.log("value: ", value)
        setFilteredRobots(robot.filter(bot => bot.name.toLowerCase().includes(searchInput)))

    }

    // function filterRobot() {
    //     return 
    // }



    return (
        // Update provider, CardList and SearchBar components to pass correct state
        <SearchContext.Provider value={{ searchRobot, robot, filteredRobot }}>
            {props.children}
        </SearchContext.Provider>
    )
}
export { RobotContextProvider, SearchContext };