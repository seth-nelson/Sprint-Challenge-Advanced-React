import React from 'react';
import PlayerCard from './PlayerCard';


function PlayerList (props) {
    return (
        <div className='player-list'>
            {props.players.map(player => {
                return <PlayerCard 
                            key={player.id} 
                            name={player.name} 
                            country={player.country}
                            searches={player.searches}
                        />
            })}
        </div>
    );
};



export default PlayerList;