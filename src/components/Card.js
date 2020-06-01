import React from 'react';

function Card(props) {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <h1>{props.bot.username}</h1>
            <img src={`https://robohash.org/${props.bot.id}`} alt="card" />
            <div></div>
            <h2>{props.bot.name}</h2>
            <p>{props.bot.email}</p>
        </div>
    )
}

export default Card; 