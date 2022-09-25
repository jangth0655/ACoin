export interface CoinList {
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}

type CoinLink = {
  website: string[];
  youtube: string[];
};

export interface CoinInfo {
  id: string;
  name: string;
  description: string;
  logo: string;
  rank: number;
  symbol: string;
  links: CoinLink;
}

type USD = {
  price: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  volume_24h: number;
  market_cap: number;
};

export interface CoinTricker {
  id: string;
  name: string;
  symbol: string;
  quotes: {
    USD: USD;
  };
}

export interface CoinOHLCV {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

export interface CoinSearch {
  currencies: [
    {
      id: string;
      name: string;
      symbol: string;
      rank: number;
      is_new: boolean;
      is_active: boolean;
      type: string;
    }
  ];
}
