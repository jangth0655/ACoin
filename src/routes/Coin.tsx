import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo } from "../api";
import React, { Suspense } from "react";

import DetailLayout from "../components/DetailLayout";
import { CoinInfo } from "../interface";

const ChartContainer = styled.div`
  margin: ${(props) => props.theme.mp.xxxxl} 0;
`;

const CoinInfoBox = styled.div`
  display: flex;
`;

const Coin = () => {
  const { coinId } = useParams();
  const { data: coinDetailData } = useQuery<CoinInfo>(
    ["info", coinId],
    () => fetchCoinInfo(coinId),
    {
      staleTime: 50000,
    }
  );

  const CoinTrickerComponent = React.lazy(
    () => import("../components/CoinTrickerComponent")
  );
  const Chart = React.lazy(() => import("../components/Chart"));

  return (
    <DetailLayout title={coinId ? coinId : "COIN"} img={coinDetailData?.logo}>
      <section>
        <CoinInfoBox>
          <Suspense fallback={<h1>Loading</h1>}>
            <CoinTrickerComponent coinId={coinId} />
          </Suspense>
        </CoinInfoBox>

        <ChartContainer>
          <Suspense fallback={<h1>Loading</h1>}>
            <Chart coinId={coinId} />
          </Suspense>
        </ChartContainer>
      </section>
    </DetailLayout>
  );
};
export default Coin;
