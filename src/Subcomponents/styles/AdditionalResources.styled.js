import styled from "styled-components";

export const ResourceCard = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
  textColor: props.textColor,
}))`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  border: 3px solid ${(props) => props.borderColor};
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
    font-family: var(--lessEmphasizedText);
    font-size: 2.25vw;
    background-color: transparent;
    color: var(--primaryWhite);
    padding-bottom: 1rem;
  }

  h3 {
    font-size: 2vw;
    font-family: var(--lessEmphasizedText);
    background-color: transparent;
    color: ${(props) => props.textColor};
  }

  p {
    font-size: 1.75vw;
    font-family: var(--lessEmphasizedText);
    background-color: transparent;
    color: var(--primaryWhite);
    margin-bottom: 0rem;
  }

  @media only screen and (max-width: 599px) {
    height: 100%;

    div {
      padding: 1rem 0.75rem;
    }

    h1 {
      font-size: 3.5vw;
      padding-bottom: 0rem;
    }

    h3 {
      font-size: 3.5vw;
    }

    p {
      font-size: 3vw;
    }
  }
`;


export const ResourceCardCOPY = styled.div.attrs((props) => ({ 
  color: props.color,
  paddingTop: props.paddingTop,
}))`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: transparent;
  padding-top: ${(props) => props.paddingTop};


  div { 
    padding-bottom: 1rem;
  }

  a {
    color: ${(props) => props.color};
  }

  a:hover {
    text-decoration: none;
  }

  h1 {
    font-family: var(--lessEmphasizedText);
    font-size: 2.5vw;
    background-color: transparent;
    color: ${(props) => props.color};
  }

  h3 {
    font-size: 2.25vw;
    font-family: var(--lessEmphasizedText);
    background-color: transparent;
    color: var(--primaryBlack);
    padding-bottom: 0.25rem;
   
  }

  p {
    font-size: 2vw;
    background-color: transparent;
    color: var(--primaryBlack);
    margin-bottom: 0rem;
  }

  @media only screen and (max-width: 599px) {
  

   div { 
    padding-bottom: 0rem;
  }
    h1 {
      font-size: 6vw;
      padding-bottom: 0rem;
    }

    h3 {
      font-size: 6vw;
      padding-bottom: 0rem;
    }

    p {
      font-size: 5vw;
    }
  }
`;

export const Padding = styled.div.attrs((props) => ({ 
  height: props.height,
}))`
padding-bottom: 5%;
position: relative;

:after { 
  position: absolute;
        content: '';
        width: 100%;
        height: ${(props) => props.height};
		  /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
        bottom: -4px;
        background: var(--primaryBlack);
        
}
`