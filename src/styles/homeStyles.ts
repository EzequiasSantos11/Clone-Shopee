import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding-bottom: 1rem;
  position: relative;
  .wrapper{
    display: flex;
    height: 100%;
    width: 100%;
    padding: 32px;
    overflow-y: auto;
    .left{
      display: flex;
      flex-direction: column;
      height: 100%;
      .calendar{
        display: flex;
        flex-shrink: 0;
        height: 349px;
        width: 316px;
        border-radius: 8px;
      }
    }
    .right{
      display: flex;
      height: 100%;
      width: 100%;
      margin-left: 80px;
    }
  }
`;