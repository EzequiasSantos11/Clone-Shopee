import styled from "styled-components";


export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 38px;
  margin-top: 10px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  background: #1C99B2;
  color: #FFF;
  padding:  10px 24px;

  &.delete{
    background: red;
  }
`;