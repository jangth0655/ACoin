import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 4rem;
`;
const LoadingCircle = styled(motion.div)`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;
const LoadingSpan = styled.span`
  display: inline-block;
  margin-top: 12px;
  font-size: ${(props) => props.theme.textSize.xs};
`;

const loadingVar: Variants = {
  initial: (isDark: boolean) => ({
    borderTop: "2px",
    borderColor: isDark ? "white" : "black",
    borderStyle: "solid",
  }),
  animate: {
    transition: {
      repeat: Infinity,
      duration: 0.7,
      ease: "linear",
    },
    rotate: 360,
  },
};

const Loading = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <LoadingBox>
      <LoadingCircle
        custom={isDark}
        variants={loadingVar}
        initial="initial"
        animate="animate"
      ></LoadingCircle>
      <LoadingSpan>Loading...</LoadingSpan>
    </LoadingBox>
  );
};
export default Loading;
