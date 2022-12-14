import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCoinIcon } from "../api";

const CoinColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.mp.xxxl};
  padding: ${(props) => props.theme.mp.md};
  background-color: ${(props) => props.theme.color.bg.md};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadow.xl};
  color: ${(props) => props.theme.color.textColor.md};
  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
    transition: ${(props) => props.theme.transition.md};
  }
`;

const LogoWithName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    justify-content: flex-start;
  }
`;

const Logo = styled.div`
  position: relative;
  width: ${(props) => props.theme.mp.xxxl};
  height: ${(props) => props.theme.mp.xxxl};
  margin-right: ${(props) => props.theme.mp.sm};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    width: ${(props) => props.theme.mp.xxl};
    height: ${(props) => props.theme.mp.xxl};
  }
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Name = styled.span`
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.xs};
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
`;

const Rank = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.color.textColor.sm};
  font-size: ${(props) => props.theme.textSize.lg};
`;

interface CoinItemProps {
  id: string;
  symbol: string;
  name: string;
  rank: number;
}

const CoinItem: React.FC<CoinItemProps> = ({ id, symbol, name, rank }) => {
  const navigate = useNavigate();
  const onCoinDetail = (coinId: string) => {
    navigate(`/${coinId}`);
  };
  return (
    <CoinColumn key={id} onClick={() => onCoinDetail(id)}>
      <LogoWithName>
        <Logo>
          <Image src={getCoinIcon(symbol.toLowerCase())} alt="" />
        </Logo>
        <Name>{name}</Name>
      </LogoWithName>
      <Info>
        <Rank>{rank}</Rank>
      </Info>
    </CoinColumn>
  );
};
export default CoinItem;
