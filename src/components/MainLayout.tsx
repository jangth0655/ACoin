import {
  motion,
  AnimatePresence,
  useScroll,
  useAnimation,
  Variants,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

import { FaArrowUp } from "react-icons/fa";
import { Main, Navbar } from "./Shared/Shared";
import MainTitle from "./Shared/MainTitle";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Section = styled.section`
  max-width: ${(props) => props.theme.responsive.md};
  margin: auto;
  margin-bottom: ${(props) => props.theme.mp.xxl};
`;

const NavbarAllPage = styled.div`
  display: flex;
  width: 100%;
`;

const NavbarCol = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  transition: ${(props) => props.theme.transition.lg};
  a {
    padding: ${(props) => props.theme.mp.sm};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const MainPage = styled(NavbarCol)<{ main: boolean }>`
  width: 80%;
  color: ${(props) => (props.main ? "white" : props.theme.color.textColor.xs)};
  transition: ${(props) => props.theme.transition.lg};
  margin-right: ${(props) => props.theme.mp.sm};
`;
const SearchPage = styled(NavbarCol)<{ main: boolean }>`
  width: 80%;
  color: ${(props) => (props.main ? props.theme.color.textColor.xs : "white")};
  transition: ${(props) => props.theme.transition.lg};
`;

const NavbarMark = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.activeColor.lg};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  left: 0;
  right: 0;
  top: 0;
  z-index: -10;
`;

const ScrollUpMark = styled(motion.div)`
  position: fixed;
  width: ${(props) => props.theme.mp.xxl};
  height: ${(props) => props.theme.mp.xxl};
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.activeColor.sm};
  color: white;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: ${(props) => props.theme.transition.md};
  &:hover {
    background-color: ${(props) => props.theme.color.activeColor.lg};
  }
`;

const scrollYVar: Variants = {
  top: {
    opacity: 0,
  },
  scroll: {
    opacity: 1,
  },
};

const MainLayout: React.FC<LayoutProps> = ({ children, title }) => {
  const mainPage = Boolean(useMatch("/"));
  const { scrollY } = useScroll();
  const scrollAnimation = useAnimation();
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return scrollY.onChange((e) => {
      if (scrollY.get() > 100) {
        scrollAnimation.start("scroll");
      } else {
        scrollAnimation.start("top");
      }
    });
  }, [scrollAnimation, scrollY]);

  const onTop = () => {
    titleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section>
      <Helmet>
        <title>{`${title} | ACoin`}</title>
      </Helmet>
      <div ref={titleRef}>
        <MainTitle title="A Coin Tracker" />
      </div>
      <Navbar>
        <AnimatePresence>
          <NavbarAllPage>
            <MainPage main={mainPage}>
              {mainPage && <NavbarMark layoutId="navbar" />}
              <Link to={"/"}>Main</Link>
            </MainPage>
            <SearchPage main={mainPage}>
              {!mainPage && <NavbarMark layoutId="navbar" />}
              <Link to={"/search"}>Search</Link>
            </SearchPage>
          </NavbarAllPage>
        </AnimatePresence>
      </Navbar>
      <Main>
        {children}
        <ScrollUpMark
          onClick={onTop}
          variants={scrollYVar}
          initial="top"
          animate={scrollAnimation}
        >
          <FaArrowUp />
        </ScrollUpMark>
      </Main>
    </Section>
  );
};
export default MainLayout;
