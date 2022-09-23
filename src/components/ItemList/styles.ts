import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  a{
    display: flex;
    align-items: center;
    gap: 12px;
    color:  #0F1527;
    #image{
      width: 1em;
    }
  }
  &.active{
    background: #E9F4F5;
    a{
      color: #4CA7A8;
    }
    svg{
      fill: #4CA7A8;
    }
  }
`;