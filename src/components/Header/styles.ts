import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  height: 119px; 
  width: 100%;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E8E8E8;
  background: #FFF;
  z-index: 999;
  .actions{
    display: flex;
    width: 40%;
    align-items: center;
    gap: 16px;
  }
  .icons{
    display: flex;
    gap: 16px;
  }
`;