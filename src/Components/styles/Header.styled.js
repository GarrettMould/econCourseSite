import styled from "styled-components";

export const Logo = styled.div`
  font-size: 6vw;
  font-family:"FoundersGroteskBold";
  font-weight: 300;
 
  span { 
    color: #FFDE69;
    font-family:"FoundersGroteskBold";
  }

  @media only screen and (max-width: 599px) {
    padding-top: 2%;
    font-size: 7.5vw;
  }
`;

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

    
`;
