import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchCoinList = async () => {
  return await (await fetch(`${BASE_URL}/coins`)).json();
};

export const getCoinIcon = (coinId?: string) => {
  return `https://coinicons-api.vercel.app/api/icon/${coinId}`;
};

export const fetchCoinInfo = async (coinId?: string) => {
  const coinInfo = await (await axios.get(`${BASE_URL}/coins/${coinId}`)).data;
  return coinInfo;
};

export const fetchCoinTricker = async (coinId?: string) => {
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
};

export const fetchCoinOHLC = async (coinId?: string) => {
  return await (
    await axios.get(
      `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
    )
  ).data;
};

export const fetchSearch = async (keyword?: string) => {
  return await (
    await axios.get(`https://api.coinpaprika.com/v1/search?q=${keyword}`)
  ).data;
};
