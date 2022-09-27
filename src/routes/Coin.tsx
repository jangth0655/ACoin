import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo } from "../api";
import React, { Suspense } from "react";

import DetailLayout from "../components/DetailLayout";
import { CoinInfo } from "../interface";

import { IoMdDocument } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import Loading from "../components/Loading";

const ChartContainer = styled.div`
  margin: ${(props) => props.theme.mp.xxxxl} 0;
`;

const CoinInfoBox = styled.div`
  display: flex;
`;

const LinkWithDescription = styled.div``;

const LinkBox = styled.div`
  padding: 0 ${(props) => props.theme.mp.sm};
`;
const LinkTitle = styled.span`
  color: ${(props) => props.theme.color.activeColor.lg};
  font-weight: 700;
  font-size: ${(props) => props.theme.textSize.lg};
`;
const LinkInfoBox = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  color: ${(props) => props.theme.color.textColor.sm};
  margin-top: ${(props) => props.theme.mp.sm};
  font-weight: 500;
  & a:first-child {
    margin-right: ${(props) => props.theme.mp.lg};
  }
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.color.textColor.sm};
  padding: ${(props) => props.theme.mp.sm};
  border-radius: ${(props) => props.theme.borderRadius.md};
  transition: ${(props) => props.theme.transition.lg};
  box-shadow: ${(props) => props.theme.shadow.md};
  & span {
    font-weight: 700;
    margin-left: ${(props) => props.theme.mp.xs};
  }
  &:hover {
    background-color: ${(props) => props.theme.color.activeColor.lg};
    color: white;
    border-color: transparent;
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.theme.mp.md} 0;
  margin-top: ${(props) => props.theme.mp.xxxxl};
  border: 1px solid ${(props) => props.theme.color.textColor.xs};
  border-radius: ${(props) => props.theme.borderRadius.md};
  box-shadow: ${(props) => props.theme.shadow.md};
  padding: ${(props) => props.theme.mp.lg};
  background-color: ${(props) => props.theme.color.bg.lg};
  color: ${(props) => props.theme.color.textColor.lg};
`;

const DescriptionTitle = styled.span`
  color: ${(props) => props.theme.color.activeColor.lg};
  font-weight: 700;
  font-size: ${(props) => props.theme.textSize.lg};
  display: inline-block;
  margin-bottom: ${(props) => props.theme.mp.xs};
`;
const Description = styled.span`
  display: inline-block;
  padding: ${(props) => props.theme.mp.xs};
  line-height: 1.5;
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
          <Suspense fallback={<Loading />}>
            <CoinTrickerComponent coinId={coinId} />
          </Suspense>
        </CoinInfoBox>

        <ChartContainer>
          <Suspense fallback={<Loading />}>
            <Chart coinId={coinId} />
          </Suspense>
        </ChartContainer>

        <LinkWithDescription>
          <LinkBox>
            <LinkTitle>Link</LinkTitle>
            <LinkInfoBox>
              <LinkButton href="https://bitcoin.org/" rel="noreferrer">
                <IoMdDocument />
                <span>WebSite</span>
              </LinkButton>
              <LinkButton href="https://www.youtube.com/watch?v=Gc2en3nHxA4&">
                <IoLogoYoutube />
                <span>Youtube</span>
              </LinkButton>
            </LinkInfoBox>
          </LinkBox>

          <DescriptionBox>
            <DescriptionTitle>Description</DescriptionTitle>
            <Description>{coinDetailData?.description}</Description>
          </DescriptionBox>
        </LinkWithDescription>
      </section>
    </DetailLayout>
  );
};
export default Coin;
