import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import styled from "styled-components";
import MainTitle from "./Shared/MainTitle";
import { Main, Navbar } from "./Shared/Shared";

import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface DetailLayoutProps {
  children: React.ReactNode;
  title?: string;
  img?: string;
}

const Section = styled.section`
  max-width: ${(props) => props.theme.responsive.md};
  margin: auto;
  margin-bottom: ${(props) => props.theme.mp.xxl};
`;

const MainTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleImage = styled.div`
  position: relative;
  width: ${(props) => props.theme.mp.xxxl};
  height: ${(props) => props.theme.mp.xxxl};
  img {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const GoBackBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px 10px;
`;

const GoBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.activeColor.sm};
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: ${(props) => props.theme.transition.md};
  &:hover {
    background-color: ${(props) => props.theme.color.activeColor.md};
  }
`;

const DetailLayout: React.FC<DetailLayoutProps> = ({
  children,
  title,
  img,
}) => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(-1);
  };
  const navbarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    navbarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <Section>
      <Helmet>
        <title>{`${title} | ACoin`}</title>
      </Helmet>

      <Navbar ref={navbarRef}>
        <GoBackBox>
          <GoBack onClick={onGoBack}>
            <BsArrowLeftShort size={30} />
          </GoBack>
        </GoBackBox>
        <MainTitleBox>
          <TitleImage>
            <img src={img} alt="" />
          </TitleImage>
          <MainTitle title={title} />
        </MainTitleBox>
      </Navbar>
      <Main>{children}</Main>
    </Section>
  );
};
export default DetailLayout;
