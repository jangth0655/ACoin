import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Section = styled.section``;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.mp.lg};
  max-width: ${(props) => props.theme.responsive.md};
  margin: auto;
`;

const NavbarAllPage = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: ${(props) => props.theme.mp.xl};
  border-bottom: 2px solid ${(props) => props.theme.color.textColor.xs};
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

const MainPage = styled(NavbarCol)`
  width: 100%;
  transition: ${(props) => props.theme.transition.lg};
`;
const SearchPage = styled(NavbarCol)`
  width: 100%;
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

const Main = styled.main`
  max-width: ${(props) => props.theme.responsive.md};
  margin: auto;
  padding: 0 ${(props) => props.theme.mp.md};
  padding-top: ${(props) => props.theme.mp.xxxxl};
  padding-bottom: ${(props) => props.theme.mp.md};
  min-height: 100vh;
`;

const MainLayout: React.FC<LayoutProps> = ({ children, title }) => {
  const mainPage = Boolean(useMatch("/"));
  return (
    <Section>
      <Helmet>
        <title>{`${title} | ACoin`}</title>
      </Helmet>
      <Navbar>
        <AnimatePresence>
          <NavbarAllPage>
            <MainPage
              style={{ color: mainPage ? "white" : "rgb(161 161 170)" }}
            >
              {mainPage && <NavbarMark layoutId="navbar" />}
              <Link to={"/"}>Main</Link>
            </MainPage>
            <SearchPage
              style={{ color: mainPage ? "rgb(161 161 170)" : "white" }}
            >
              {!mainPage && <NavbarMark layoutId="navbar" />}
              <Link to={"/search"}>Search</Link>
            </SearchPage>
          </NavbarAllPage>
        </AnimatePresence>
      </Navbar>
      <Main>{children}</Main>
    </Section>
  );
};
export default MainLayout;
