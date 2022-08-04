import { Link } from "react-router-dom";

import { FlexRow } from "./styles/FlexContainers.styled";

import { Logo } from "./styles/Header.styled";




import { PaddingTop } from "./styles/Containers.styled";

const Header = (props) => {
  return (
    <>
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      <FlexRow justifyContent="center">
          <Link style={{ textDecoration: "none" }} to="/">
              <Logo>Econ 101</Logo>
          </Link>
      </FlexRow>
          
    </>
  );
};

export default Header;
