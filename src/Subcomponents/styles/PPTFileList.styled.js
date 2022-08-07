import styled from "styled-components";

export const PPTList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;

  @media only screen and (max-width: 599px) {
    width: 90%;
  }
`;
export const ListItem = styled.li.attrs((props) => ({
  color: props.color,
}))`
  padding-bottom: 3%;
  font-size: 2.5vw;

  
  a {
    color: var(--primaryBlack);
    text-decoration: none;
    background-image: linear-gradient(180deg,rgba(255,255,255,0) 50%, ${(props) => props.color} 50%);
    background-size: 75% 80%;
    background-repeat: no-repeat;
    background-position: top left;
    transition: background .35s;
  }

  a:hover { 
    background-size: 100% 80%;
  }



  @media only screen and (max-width: 599px) {
    font-size: 6vw;
    padding-bottom: 2rem;

    a {
    background-size: 100% 80%;
    
    
  }
  }
`;
