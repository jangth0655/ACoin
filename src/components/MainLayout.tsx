import React from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Section = styled.section`
  padding: ${(props) => props.theme.mp.sm};
`;

const Navbar = styled.nav``;

const Main = styled.main`
  max-width: ${(props) => props.theme.responsive.md};
  margin: auto;

  border: 1px solid black;
`;

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Section>
      <Navbar></Navbar>
      <Main>{children}</Main>
    </Section>
  );
};
export default MainLayout;
