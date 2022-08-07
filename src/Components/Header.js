import { Link } from "react-router-dom";

import { FlexRow } from "./styles/FlexContainers.styled";

import { Logo, CourseDescription} from "./styles/Header.styled";



import { PaddingTop } from "./styles/Containers.styled";

const Header = (props) => {
  return (
    <>
      <PaddingTop top={props.isMobile ? "10%" : "7%"}></PaddingTop>
      <FlexRow justifyContent={props.isMobile ? "center" : "start"}>
          <Link style={{ textDecoration: "none" }} to="/">
              
              <Logo><span>Econ</span> Course Guide</Logo>
              
          </Link>
          
      </FlexRow>
          
    </>
  );
};

export default Header;
