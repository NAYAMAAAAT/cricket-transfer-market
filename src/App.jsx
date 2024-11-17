import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Players from "./components/players";

const App = () => {
  const [claimCoin, setClaimCoin] = useState(0)
  const handleClaimCoin = (coin, notify1) => {
    setClaimCoin(claimCoin + coin)
    notify1()

  }



  return (
    <div>
      <Header  claimCoin={claimCoin}></Header>
      <Banner handleClaimCoin={handleClaimCoin}></Banner>
      <Players></Players>
    </div>
  );
};

export default App;