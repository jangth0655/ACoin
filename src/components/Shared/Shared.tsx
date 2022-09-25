import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.mp.lg};
  position: relative;
`;

export const Main = styled.main`
  border-radius: ${(props) => props.theme.borderRadius.xl};
  padding: 0 ${(props) => props.theme.mp.xxl};
  padding-top: ${(props) => props.theme.mp.xxl};
  padding-bottom: ${(props) => props.theme.mp.md};
  min-height: 100vh;
  box-shadow: ${(props) => props.theme.shadow.xl};
`;
