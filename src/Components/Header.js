import { Link } from "react-router-dom";

import { FlexRow } from "./styles/FlexContainers.styled";

import { Logo } from "./styles/Header.styled";




import { PaddingTop } from "./styles/Containers.styled";

const Header = (props) => {
  return (
    <>
      <PaddingTop top={props.isMobile ? "8%" : "5%"}></PaddingTop>
      <FlexRow justifyContent="start">
          <Link style={{ textDecoration: "none" }} to="/">
              <Logo><span>Geek</span>enomics</Logo>
          </Link>
      </FlexRow>
          
    </>
  );
};

export default Header;
