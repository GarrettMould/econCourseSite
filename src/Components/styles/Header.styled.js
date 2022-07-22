import styled from "styled-components";

export const Logo = styled.div`
  font-size: 4vw;
  font-weight: 600;

  @media only screen and (max-width: 599px) {
    font-size: 5vw;
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
