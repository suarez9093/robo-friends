import React from 'react';

function Card(props) {
    console.log(props)
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h1>{props.robot.username}</h1>
            <img src={`https://robohash.org/${props.robot.id}`} alt="card" />
            <div></div>
            <h2>{props.robot.name}</h2>
            <p>{props.robot.email}</p>
        </div>
    )
}

export default Card;