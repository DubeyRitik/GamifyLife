import { useState, useEffect } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Store from "./Components/Store";
function App(props) {
  const [coins, setCoins] = useState(() => {
    const storedCoins = localStorage.getItem("coins");
    return storedCoins ? Number(storedCoins) : 0;
  });
  const [home, setShowHome] = useState(true);
  const [store, setShowStore] = useState(false);

  useEffect(() => {
    const storedCoins = localStorage.getItem("coins");
    if (storedCoins) {
      setCoins(Number(storedCoins));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("coins", coins);
  }, [coins]);

  function handleIncCoins({ c, n }) {
    setCoins((prevState) => Number(c) + Number(prevState));
  }

  function handleDec(c) {
    if (Number(coins) < Number(c)) {
      alert("Not Enough Coins, Work More");
    } else {
      setCoins((prevState) => Number(prevState) - Number(c));
      alert("Enjoy your day!!!");
    }
  }

  function displayHome() {
    setShowHome(true);
    setShowStore(false);
  }

  function displayStore() {
    setShowStore(true);
    setShowHome(false);
  }

  return (
    <div className="App">
      <Navbar
        coins={coins}
        displayHome={displayHome}
        displayStore={displayStore}
      ></Navbar>
      {home && <Home handleInc={handleIncCoins} coins={coins}></Home>}
      {store && <Store handleDec={handleDec}></Store>}
    </div>
  );
}

export default App;
