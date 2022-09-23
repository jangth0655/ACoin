import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: ${(props) => props.theme.textSize.xxxl};
  color: ${(props) => props.theme.color.textColor.lg};
`;

const Coin = () => {
  const { coinId } = useParams();
  console.log(coinId);
  return <Title>Coin</Title>;
};
export default Coin;
