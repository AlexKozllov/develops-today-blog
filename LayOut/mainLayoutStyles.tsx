import styled from "styled-components";

const NavBar = styled.nav`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  box-shadow: 4px 1px 27px 0px rgba(0, 0, 0, 0.82) inset;
`;

const NavigatorLink = styled.a`
  font-family: Roboto;
  font-size: 20px;
  color: #1404ff;
`;

const MainWrapper = styled.main`
  max-width: 1024px;
  margin: 0 auto;
`;
export { NavBar, NavigatorLink, MainWrapper };
