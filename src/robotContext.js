import React, { useState, createContext, useEffect } from 'react';
const SearchContext = createContext();


function RobotContextProvider(props) {
    const [searchInput, setSearchInput] = useState("");
    const [robot, setRobot] = useState([]);



    function searchRobot(e) {
        const { value } = e.target
        setSearchInput(value)
    }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => setRobot(data))
    }, [])

    const filteredRobot = robot.filter(robot => robot.username.toLowerCase().includes(searchInput))

    return (

        <SearchContext.Provider value={{ filteredRobot, searchRobot }}>
            {props.children}
        </SearchContext.Provider>
    )
}
export { RobotContextProvider, SearchContext };