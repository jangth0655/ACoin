import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchCoinTricker } from "../api";
import { CoinTricker } from "../interface";
import PositiveWithNegative from "./Shared/PositionWithNegative";

const InfoCol = styled.div`
  width: 100%;
`;

const CoinTimePriceChange = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const CoinCurrentPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: ${(props) => props.theme.mp.xxxxl};
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const PriceTimeChange = styled(PriceBox)``;

const DetailNameSpan = styled.span`
  color: ${(props) => props.theme.color.textColor.sm};
  margin-bottom: ${(props) => props.theme.mp.sm};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.xs};
  }
`;

const ValueBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Value = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.textSize.xl};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.md};
  }
`;
const PriceTimeChangeValue = styled(Value)`
  color: rgb(244 63 94);
  margin-right: ${(props) => props.theme.mp.sm};
`;

const PriceValue = styled(Value)``;

interface CoinTrickerProps {
  coinId?: string;
}

const CoinTrickerComponent: React.FC<CoinTrickerProps> = ({ coinId }) => {
  const { data: coinTrickerData } = useQuery<CoinTricker>(
    ["tricker", coinId],
    () => fetchCoinTricker(coinId && coinId),
    {
      staleTime: 50000,
      suspense: true,
    }
  );
  const formatCurrency = (currency?: number) => {
    return currency?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
    });
  };

  const halfDayPriceTimeChange =
    coinTrickerData && coinTrickerData?.quotes?.USD.percent_change_12h;

  const dayPriceTimeChange =
    coinTrickerData && coinTrickerData?.quotes?.USD?.percent_change_24h;

  const weekPriceTimeChange =
    coinTrickerData && coinTrickerData?.quotes?.USD.percent_change_7d;

  return (
    <InfoCol>
      <CoinTimePriceChange>
        <PriceBox>
          <DetailNameSpan>Price</DetailNameSpan>
          <PriceValue>
            {formatCurrency(coinTrickerData?.quotes?.USD?.price)}
          </PriceValue>
        </PriceBox>

        <PriceTimeChange>
          <DetailNameSpan>6 hour</DetailNameSpan>
          <ValueBox>
            <PriceTimeChangeValue>
              {halfDayPriceTimeChange}
            </PriceTimeChangeValue>
            <PositiveWithNegative value={halfDayPriceTimeChange} />
          </ValueBox>
        </PriceTimeChange>
        <PriceTimeChange>
          <DetailNameSpan>1 day</DetailNameSpan>
          <ValueBox>
            <PriceTimeChangeValue>
              {coinTrickerData?.quotes.USD.percent_change_24h}
            </PriceTimeChangeValue>
            <PositiveWithNegative value={dayPriceTimeChange} />
          </ValueBox>
        </PriceTimeChange>
        <PriceTimeChange>
          <DetailNameSpan>1 week</DetailNameSpan>
          <ValueBox>
            <PriceTimeChangeValue>
              {coinTrickerData?.quotes.USD.percent_change_7d}
            </PriceTimeChangeValue>
            <PositiveWithNegative value={weekPriceTimeChange} />
          </ValueBox>
        </PriceTimeChange>
      </CoinTimePriceChange>

      <CoinCurrentPrice>
        <PriceBox>
          <DetailNameSpan>Market cap</DetailNameSpan>
          <PriceValue>
            {formatCurrency(coinTrickerData?.quotes.USD.market_cap)}
          </PriceValue>
        </PriceBox>
        <PriceBox>
          <DetailNameSpan>24h volume</DetailNameSpan>
          <PriceValue>
            {formatCurrency(coinTrickerData?.quotes.USD.volume_24h)}
          </PriceValue>
        </PriceBox>
      </CoinCurrentPrice>
    </InfoCol>
  );
};
export default CoinTrickerComponent;
