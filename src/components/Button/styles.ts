import styled from "styled-components";


export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 38px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  background: transparent;
  background: #F05D40;
  color: #FFF;
  &.delete{
    background: #ffdfdf;
    color: #ee4d2d;
    border-radius: 6px;
    border: 1px solid #F05D40;
  }
`;