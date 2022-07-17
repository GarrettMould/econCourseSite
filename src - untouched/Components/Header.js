import { FlexRow } from "./styles/FlexContainers.styled";

import { Logo, NavBar } from "./styles/Header.styled";

const Header = (props) => {
  return (
    <FlexRow
      alignItems="center"
      justifyContent="space-between"
      padding="3% 0% 0% 0%"
      width="100%"
    >
      <Logo>Econ 101</Logo>

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
    </FlexRow>
  );
};

export default Header;
