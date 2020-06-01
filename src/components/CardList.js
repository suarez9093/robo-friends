import React from 'react';
import Card from './Card';

function CardList({ robots }) {

    // const { filteredRobot } = useContext(SearchContext)

    return robots.length === 0 ? <h2 className="title">Loading...</h2> :
        (
            robots.map(bot => {
                return <Card key={bot.id} bot={bot} />
            }))
}
export default CardList;