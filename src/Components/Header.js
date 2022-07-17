import { FlexRow } from "./styles/FlexContainers.styled";

import { Logo, NavBar } from "./styles/Header.styled";

import { GridColumn, GridContainer, GridRow } from "./styles/Grid.styled";

import { PaddingTop } from "./styles/Containers.styled";

const Header = (props) => {
  return (
    <>
      <PaddingTop></PaddingTop>
      <GridContainer width="100%">
        <GridRow>
          <GridColumn size="6">
            <Logo>Econ 101</Logo>
          </GridColumn>
          <GridColumn size="6">
            <NavBar>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Practice Tests</li>
              </a>
              <a href="#">
                <li>Resources</li>
              </a>
            </NavBar>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </>
  );
};

export default Header;
