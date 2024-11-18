import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Player from "./Player";
import Selected from "./selected";


const Players = ({ handleToggleBtn, toggle, handleSelectedPlayer, selectedPlayers, handleRemovePlayer }) => {
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
        <div className=" mt-24">
        <div className="flex justify-between items-center">
        {
                    toggle ? <h1 className="text-2xl font-bold">Available Players {players.length}</h1> : <h1 className="text-2xl font-bold">Selected Player ({selectedPlayers.length}/6)</h1>
                }
            
            <div className="">
                <button onClick={() => handleToggleBtn('available')} className={`${toggle ? "m-3 text-base font-semibold bg-gray-200 py-3 px-5 rounded-bl-lg border-2 bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 border-fuchsia-200" : "m-3 text-base font-semibold py-3 px-5 rounded-bl-lg border-2  border-fuchsia-200"}`} >Available</button>
                <button onClick={() => handleToggleBtn('selected')} className={`${toggle ? "text-base font-semibold py-3 px-5 rounded-br-lg border-2  border-fuchsia-200" : "text-base font-semibold bg-gray-200 py-3 px-5 rounded-br-lg border-2 bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 border-fuchsia-200"}`}>Selected {selectedPlayers.length}</button>
            </div>
        </div>
        <div  className="grid md:grid-cols-3 grid-cols-1 gap-4 my-8">{
            toggle ? players.map(player =><Player  handleSelectedPlayer={handleSelectedPlayer} key={player.id} player={player}></Player> ) : selectedPlayers.map(pla => <Selected  key={pla.id} pla={pla} handleRemovePlayer={handleRemovePlayer}></Selected>)
            }
        </div>
        <div>
        {
                toggle ? '' : <button onClick={() => handleToggleBtn('available')} className=" bg-gray-200  rounded-bl-lg bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500  m-3 text-base font-semibold py-3 px-5 rounded-lg border-2  border-fuchsia-200">Add More</button>
            }
        </div>
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