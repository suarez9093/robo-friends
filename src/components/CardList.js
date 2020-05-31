import React, { useContext } from 'react';
import Card from './Card';
import { SearchContext } from '../robotContext';
// import { robots } from '../robots';


function CardList() {
    const { robot, filteredRobot } = useContext(SearchContext)
    return (
        filteredRobot.map(bot => <Card key={bot.id} bot={bot} />)

    )
}

export default CardList;