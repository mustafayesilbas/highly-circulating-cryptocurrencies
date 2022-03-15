import currency from "currency.js";
import { FC } from "react";
import { Datum } from "../types";

interface ICoinProps {
  coin: Datum;
}

const Coin: FC<ICoinProps> = ({ coin }) => {
  const currencyFormatOptions = (amount: number): string => {
    if (amount) {
      return currency(amount, {
        pattern: `# `,
        separator: ".",
        precision: 0,
      }).format();
    } else {
      return "Not specified";
    }
  };

  return (
    <>
      <tr>
        <td>{coin.name}</td>
        <td>{coin.symbol}</td>
        <td style={{ whiteSpace: "nowrap", textAlign: "right" }}>
          {currency(coin.quote.USD.market_cap, {
            pattern: `# `,
            separator: ".",
            precision: 0,
          }).format()}
        </td>
        <td style={{ textAlign: "right" }}>
          {currencyFormatOptions(coin.circulating_supply)}
        </td>
        <td style={{ textAlign: "right" }}>
          {currencyFormatOptions(coin.total_supply)}
        </td>
        <td style={{ textAlign: "right" }}>
          {currencyFormatOptions(coin.max_supply)}
        </td>
        <td style={{ textAlign: "center" }}>
          {coin.total_supply
            ? `%${Math.round(
                (coin.circulating_supply / coin.total_supply) * 100
              )}`
            : "Not specified"}
        </td>
        <td style={{ textAlign: "center" }}>
          {coin.max_supply
            ? `%${Math.round(
                (coin.circulating_supply / coin.max_supply) * 100
              )}`
            : "Not specified"}
        </td>
        <td style={{ textAlign: "center" }}>
          {coin.total_supply && coin.max_supply
            ? `%${Math.round((coin.total_supply / coin.max_supply) * 100)}`
            : "Not specified"}
        </td>
        <td>{coin.date_added.toLocaleString().substr(0, 10)}</td>
        <td style={{ textAlign: "right" }}>{coin.num_market_pairs}</td>
      </tr>
    </>
  );
};

export default Coin;
