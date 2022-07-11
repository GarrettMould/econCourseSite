import styled from "styled-components";

export const ResourceCard = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
}))`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  border: 4px solid ${(props) => props.borderColor};
  border-radius: 10px;

  div {
    padding: 1.5rem;
  }

  img {
    max-width: 90%;
  }

  a {
    color: var(--primaryWhite);
  }

  a:hover {
    text-decoration: none;
  }

  h1 {
    font-family: var(--emphasizedText);
    font-size: 2.25vw;
    background-color: transparent;
    color: var(--primaryWhite);
    padding-bottom: 1rem;
  }

  h3 {
    font-size: 2vw;
    font-family: var(--emphasizedText);
    background-color: transparent;
    color: ${(props) => props.borderColor};
  }

  p {
    font-size: 1.75vw;
    font-family: var(--emphasizedText);
    background-color: transparent;
    color: var(--primaryWhite);
    margin-bottom: 0rem;
  }
`;
