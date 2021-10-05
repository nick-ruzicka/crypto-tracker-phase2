import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Coin from "../src/components/Coin";
import SearchCoin from "./components/SearchCoin";

function App() {
  const [coins, setCoins] = useState([]);
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(coins);

  return (
    <div>
      <Header />
      {visible ? <SearchCoin /> : null} 
      <button onClick={() => setVisible(!visible)}>{!visible ? 'Search' : 'Hide'}</button>
      <hr/>
      <ul className="coinlist list-group mt-2">
        {coins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default App;
