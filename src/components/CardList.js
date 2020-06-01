import React from 'react';
import Card from './Card';

function CardList({ robots }) {
    return (
        robots.map(bot =>
            <Card key={bot.id} bot={bot} />
        ))
}
export default CardList;