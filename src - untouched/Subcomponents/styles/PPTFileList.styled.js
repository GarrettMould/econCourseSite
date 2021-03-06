import styled from "styled-components";

export const PPTList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
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
`;
