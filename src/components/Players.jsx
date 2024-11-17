import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Player from "./Player";

const Players = () => {
    const [players,setPlayers]= useState([])
    useEffect(()=>{
        const playerDataLoad = async ()=>{
            const res = await fetch('players.json')
            const data = await res.json()
            setPlayers(data);
        }
        playerDataLoad()
    },[])
    return (
        <div  className="grid md:grid-cols-3 grid-cols-1 gap-4 my-8">{
            players.map(player =><Player  key={player.id} player={player}></Player> )
            }
        </div>
       
    );
    
};
  Players.propTypes = {
    handleToggleBtn: PropTypes.func,
    toggle: PropTypes.bool,
    handleSelectedPlayer: PropTypes.func,
    selectedPlayers: PropTypes.array,
    handleRemovePlayer: PropTypes.func,
}
export default Players;