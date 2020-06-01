import React, { useContext } from 'react';
import Card from './Card';
import { SearchContext } from '../robotContext';

function CardList() {

    const { filteredRobot } = useContext(SearchContext)

    return filteredRobot.length === 0 ? <h2 className="title">Loading...</h2> :
        (
            filteredRobot.map(bot => {
                return <Card key={bot.id} bot={bot} />
            }))
}
export default CardList;