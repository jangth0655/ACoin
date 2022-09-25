import styled from "styled-components";

interface MainTitleProps {
  title?: string;
}

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.mp.lg};
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props) => props.theme.color.activeColor.xl};
  font-size: ${(props) => props.theme.textSize.xxxl};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.xxl};
  }
`;

const MainTitle: React.FC<MainTitleProps> = ({ title }) => {
  return <Title>{title}</Title>;
};
export default MainTitle;
