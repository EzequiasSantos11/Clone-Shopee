import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  height: 360px;
  flex-direction: column;
  flex-shrink: 0;
  h1{
    margin-bottom: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
`;

export const Card  = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding: 12px 16px;
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  .bin{
    top: 10px;
    right: 10px;
    position: absolute;
    svg{
      fill: red;
    }
  }
  .title{
    h2{
      font-size: 16px;
    }
    p{
      font-size: 14px;
      color: #B4BAC5;
      font-weight: 400;
      margin-top: 4px;
    }
  }
  .time{
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: #4CA7A8;
    svg{
      color: #4CA7A8;
    }
  }
`;

