import styled, { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    input, textarea, button{
      outline: none;
      border: none;
    }
    text-decoration: none;
    list-style: none;
  }
  section{
    padding-top: 8rem;
  }
  
`;