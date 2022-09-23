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
    a, p, span{
      font-family: "DM Sans", sans-serif;
    }
    h1, h2, h3, h4, h5{
      font-family: "DM Sans", sans-serif;
    }
  }
  
`; 

export const Container = styled.section`
  display: flex;
  margin-left: 268px;
`;