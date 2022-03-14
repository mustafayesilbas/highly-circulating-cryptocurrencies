export interface USD {
  price: number;
  volume_24h: number;
  volume_change_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  market_cap_dominance: number;
  fully_diluted_market_cap: number;
  last_updated: Date;
}

export interface BTC {
  price: number;
  volume_24h: number;
  volume_change_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  market_cap_dominance: number;
  fully_diluted_market_cap: number;
  last_updated: Date;
}

export interface Quote {
  USD: USD;
  BTC: BTC;
}

export interface Datum {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmc_rank: number;
  num_market_pairs: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  last_updated: Date;
  date_added: Date;
  tags: string[];
  platform?: any;
  quote: Quote;
}

export interface Status {
  timestamp: Date;
  error_code: number;
  error_message: string;
  elapsed: number;
  credit_count: number;
}

export interface RootObject {
  data: Datum[];
  status: Status;
}

export interface Response {
  response: RootObject;
}
