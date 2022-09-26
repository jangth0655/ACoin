import { useQuery } from "@tanstack/react-query";
import { fetchCoinOHLC } from "../api";
import { CoinOHLCV } from "../interface";
import ApexChart from "react-apexcharts";
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";

interface ChartProps {
  coinId?: string;
}

const Chart: React.FC<ChartProps> = ({ coinId }) => {
  const isDark = useRecoilValue(isDarkAtom);
  const { data: ohlcvData, isLoading } = useQuery<CoinOHLCV[]>(
    ["ohlcv", coinId],
    () => fetchCoinOHLC(coinId),
    { suspense: true }
  );

  const data = ohlcvData?.map((price) => ({
    x: new Date(price.time_close),
    y: [
      parseFloat(price?.open).toFixed(2),
      parseFloat(price?.high).toFixed(2),
      parseFloat(price?.low).toFixed(2),
      parseFloat(price?.close).toFixed(2),
      parseFloat(price?.volume).toFixed(2),
    ],
  }));

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div>
      <ApexChart
        type="candlestick"
        series={[
          {
            data: data ?? [],
          },
        ]}
        options={{
          theme: {
            mode: isDark ? "dark" : "light",
          },
          chart: {
            height: 500,
            width: 500,
            toolbar: {
              show: false,
            },
          },
          title: {
            text: coinId,
          },
          xaxis: {
            type: "datetime",
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
              show: false,
            },
          },
          yaxis: {
            tooltip: {
              enabled: false,
            },
          },
          tooltip: {
            style: {
              fontSize: "12px",
            },
            y: {
              formatter: (value) => `$ ${value}`,
            },
          },
        }}
      />
    </div>
  );
};
export default Chart;
