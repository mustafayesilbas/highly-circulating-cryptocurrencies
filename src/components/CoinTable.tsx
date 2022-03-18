import React, { FC } from "react";
import currency from "currency.js";
import { Datum } from "../types";
import Coin from "./Coin";

interface ICoinTableProps {
  coins: Datum[];
}

const CoinTable: FC<ICoinTableProps> = ({ coins }) => {
  console.log("coins:", JSON.stringify(coins));
  return (
    <>
      <h1>Highly Circulating Cryptocurrencies</h1>
      <table>
        <tr>
          <th>Coin</th>
          <th>Symbol</th>
          <th>Market Cap (USD)</th>
          <th>Circulating Supply (Amount)</th>
          <th>Total Supply (Amount)</th>
          <th>Max Supply (Amount) </th>
          <th>Circulating/Total Supply (%)</th>
          <th>Circulating/Max Supply (%) </th>
          <th>Total/Max Supply (%) </th>
          <th style={{ whiteSpace: "nowrap" }}>Date Added</th>
          <th>Num Market Pairs</th>
        </tr>
        {coins
          ? coins.map((coin, index) => <Coin coin={coin} key={index} />)
          : null}
      </table>
    </>
  );
};

export default CoinTable;
