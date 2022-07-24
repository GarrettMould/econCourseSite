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
  font-size: 2.5vw;
  padding-bottom: 2rem;

  a {
    color: ${(props) => props.color};
  }

  a:hover {
    text-decoration: none;
  }

  @media only screen and (max-width: 599px) {
    font-size: 5vw;
    padding-bottom: 2rem;
  }
`;
