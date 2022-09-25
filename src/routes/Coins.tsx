import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchCoinList } from "../api";
import CoinItem from "../components/CoinItem";
import MainLayout from "../components/MainLayout";
import { CoinList } from "../interface";

const CoinContainer = styled.div``;

const CoinInfoTitle = styled.div`
  padding: 0 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: ${(props) => props.theme.color.textColor.md};
    font-size: ${(props) => props.theme.textSize.md};
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    text-transform: uppercase;
  }
`;

const Border = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${(props) => props.theme.color.textColor.xs};
  opacity: 0.3;
  margin: ${(props) => props.theme.mp.xxxl} 0;
  margin-top: 0.7rem;
`;

const Coins = () => {
  const { data, isLoading } = useQuery<CoinList[]>(["coinList"], fetchCoinList);

  return (
    <MainLayout title="Main">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <CoinContainer>
          <CoinInfoTitle>
            <span>Coin</span>
            <span>Rank</span>
          </CoinInfoTitle>
          <Border />
          {data?.slice(0, 50).map((coin) => (
            <CoinItem
              key={coin.id}
              id={coin.id}
              name={coin.name}
              rank={coin.rank}
              symbol={coin.symbol}
            />
          ))}
        </CoinContainer>
      )}
    </MainLayout>
  );
};
export default Coins;
