import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Players from "./components/Players";


const App = () => {
  const [claimCoin, setClaimCoin] = useState(0)
  const [toggle, setToggle] = useState(true)
  const [selectedPlayers, setSelectedPlayers] = useState([])

  const handleClaimCoin = (coin, notify1) => {
    setClaimCoin(claimCoin + coin)
    notify1()

  }




  const handleRemovePlayer = (pla, notifyPlayerRemove) => {
    const remove = selectedPlayers.filter(pID => pID.id !== pla.id);
    setSelectedPlayers(remove)
    setClaimCoin(claimCoin + pla.price)
    notifyPlayerRemove()


  }

  const handleSelectedPlayer = (player, notify, notifyWarning, notifyAlradyAddWarning, notifyAlready6Players) => {
    const alredyAddPlayer = selectedPlayers.find(newPlayer => newPlayer.id == player.id)
    if (claimCoin >= player.price) {
      if (alredyAddPlayer) {
        notifyAlradyAddWarning()
      }
      else {
        if (selectedPlayers.length == 6) {
          notifyAlready6Players()

        }
        else {
          const newPlayers = [...selectedPlayers, player]
          setSelectedPlayers(newPlayers)
          notify()
          setClaimCoin(claimCoin - player.price)
        }
      }
    }
    else {
      notifyWarning()
    }
  }

  const handleToggleBtn = (selectedBtn) => {
    if (selectedBtn == 'available') {
      setToggle(true)
    }
    else {
      setToggle(false)
    }
  }
  return (
    <div>
      <Header  claimCoin={claimCoin}></Header>
      <Banner handleClaimCoin={handleClaimCoin}></Banner>
      <main className='w-10/12 mx-auto'>
      <Players handleRemovePlayer={handleRemovePlayer} selectedPlayers={selectedPlayers} handleSelectedPlayer={handleSelectedPlayer} toggle={toggle} handleToggleBtn={handleToggleBtn}></Players></main>
    </div>
  );
};

export default App;