import styled from "styled-components";

export const Banner = styled.div`

    position: absolute;
    display: block; 
    background-color: #fde9a2;
    left: 0;
    right: 0;
    top: 0;
    margin: 0.6rem auto;
    text-align: center;
    padding: 0.75rem 0rem 0.5rem 0rem;
    font-family: var(--lessEmphasizedText);
    font-size: 1.2rem;
    border-radius: 3px;
    border: 2px solid #fde9a2;
    width: 90%;
    width: calc(100vw - 1rem);

    a { 
        font-family: var(--lessEmphasizedText);
        color: black; 
    }

    a:hover { 
        text-decoration: none;
    }
`