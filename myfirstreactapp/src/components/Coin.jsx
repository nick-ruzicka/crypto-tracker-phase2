import React from "react";
import { Link } from "react-router-dom";

export default function Coin({ coin }) {
  console.log(coin);
  return (
    <Link to="/coindetail">
      <li>
        <img className="coinlist-image" src={coin.image} alt="" />
        <span>{coin.current_price}</span>
        <span>{coin.price_change_percentage_24h}</span>
      </li>
    </Link>
  );
}