import styled from "styled-components";


export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 38px;
  margin-top: 10px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  background: #4CA7A8;
  color: #FFF;
  padding:  10px 24px;

  &.delete{
    background: red;
  }
`;