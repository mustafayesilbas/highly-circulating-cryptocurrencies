import axios from "axios";
import { useEffect, useState } from "react";
import { Datum, RootObject } from "./types";
import { API } from "./constant";
import "./App.css";
import CoinTable from "./components/CoinTable";
import Loading from "./components/Loading";

const App = () => {
  const [coins, setCoins] = useState<Array<Datum>>([]);
  const [limit, setLimit] = useState(1000);
  const [loading, setLoading] = useState(false);

  const getCoins = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<RootObject>(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?${API.KEY}=${API.VALUE}`,
        { params: { limit: limit ? limit : 1000 } }
      );
      setCoins(data.data);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    getCoins();
  };

  return (
    <>
      <label>
        Enter the number of records you want to list:
        <input
          type="text"
          placeholder="Default is 1000"
          onChange={(e) => setLimit(Number(e.target.value))}
        />
      </label>
      <input type="button" value="Get coins" onClick={handleClick} />
      {loading ? <Loading /> : <CoinTable coins={coins} />}
    </>
  );
};
export default App;
