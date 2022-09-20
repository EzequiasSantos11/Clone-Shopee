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
  
`; 

export const Container = styled.section`
  display: flex;
  width: 100%;
  z-index: 9999;
  position: relative;
`;