import axios from "axios";
import { useEffect, useState } from "react";
import { Datum, RootObject } from "./types";
import { API } from "./constant";

import "./App.css";

const App = () => {
  const [coins, setCoins] = useState<Array<Datum>>([]);

  const getCoins = async () => {
    try {
      const { data } = await axios.get<RootObject>(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?${API.KEY}=${API.VALUE}`,
        { params: { limit: 1000 } }
      );
      setCoins(data.data);
      console.log("DATA: ", data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getCoins();
  }, []);

  const getPercentage = (
    circulatingSupply: number,
    totalSupply: number
  ): string => {
    if (circulatingSupply && totalSupply) {
      return "Hesaplandi";
    }
    return "No Data";
  };

  return (
    <>
      <h1>Highly Circulating Cryptocurrencies</h1>
      <table>
        <tr>
          <th>Coin</th>
          <th>Symbol</th>
          <th>Circulation Percentage</th>
          <th>Circulating Supply</th>
          <th>Total Supply</th>
          <th>Max Supply</th>
        </tr>
        {coins
          ? coins.map((coin, index) => (
              <tr key={index}>
                <td>{coin.name}</td>
                <td>{coin.symbol}</td>
                <td>
                  {coin.total_supply
                    ? `%${Math.round(
                        (coin.circulating_supply / coin.total_supply) * 100
                      )}`
                    : "No data"}
                </td>
                <td>{coin.circulating_supply}</td>
                <td>{coin.total_supply}</td>
                <td>{coin.max_supply || "No data"}</td>
              </tr>
            ))
          : null}
      </table>
    </>
  );
};
export default App;
