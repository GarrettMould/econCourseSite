import styled from "styled-components";

export const Logo = styled.div`
  font-size: 4.5vw;
  font-family:"FoundersGroteskRegular";
  font-weight: 300;
  line-height: 120%;
 
  span { 
    font-size: 5vw;
    color: var(--primaryYellow);
    font-family:"FoundersGroteskBold";
  }

  @media only screen and (max-width: 599px) {
    padding-top: 2%;
    font-size: 7.5vw;

    span { 
      font-size: 8vw;
    }
  }
`;

export const CourseDescription = styled.div`
display: inline;
  font-size: 2.5vw;
  font-family: "FoundersGroteskLight";
  font-weight: 300;

  


`


export const NavBar = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;

a {
    text-decoration: none;  
    padding-left: 70px;
  }

  li {
    font-size: 1.75vw;
    list-style: none;
  }
    
`;
