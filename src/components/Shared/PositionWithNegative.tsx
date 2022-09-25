import styled from "styled-components";

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

interface PositiveWithNegativeProps {
  value?: number;
}

const PositiveWithNegativeIcon = styled.div`
  color: ${(props) => props.theme.color.activeColor.lg};
  font-size: ${(props) => props.theme.textSize.xl};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.sm};
  }
`;

const PositiveWithNegative: React.FC<PositiveWithNegativeProps> = ({
  value,
}) => {
  return Math.sign(value ? value : 0) === -1 ? (
    <PositiveWithNegativeIcon>
      <FaArrowDown />
    </PositiveWithNegativeIcon>
  ) : (
    <PositiveWithNegativeIcon>
      <FaArrowUp />
    </PositiveWithNegativeIcon>
  );
};

export default PositiveWithNegative;
