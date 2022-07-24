import styled from "styled-components";

export const ChangeUnit = styled.button.attrs((props) => ({
  color: props.color,
  type: props.type,
}))`
  margin: auto 50px;
  position: absolute;
  left: ${(props) => (props.type == "previous" ? 0 : "auto")};
  right: ${(props) => (props.type == "next" ? 0 : "auto")};
  border: none;
  font-size: 2.5vw;
  a {
    color: ${(props) => props.color};
  }

  a:hover {
    text-decoration: none;
  }

  @media only screen and (max-width: 599px) {
    font-size: 6vw;
  }
`;
