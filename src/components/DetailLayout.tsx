import React from "react";
import styled from "styled-components";

interface DetailLayoutProps {
  children: React.ReactNode;
}

const Section = styled.section``;

const Navbar = styled.nav``;

const Main = styled.main``;

const DetailLayout: React.FC<DetailLayoutProps> = ({ children }) => {
  return (
    <Section>
      <Navbar></Navbar>
      <Main>{children}</Main>
    </Section>
  );
};
export default DetailLayout;
