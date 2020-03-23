import React from 'react';


function PlayerCard (props) {
    return (
        <div className='player-card-container'>
            <h2>{props.name}</h2>
            <p>{props.country}</p>
        </div>
    );
}



export default PlayerCard;