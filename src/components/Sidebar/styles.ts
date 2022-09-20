import styled from "styled-components";


export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 268px;
  border-right: 1px solid #E8E8E8;
  padding-top: 43px;
  background: #FFF;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 71px;
  width: 90%;
  margin: 0 auto;
  background: #355072;
  img{
    width: 90%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 48px;
  width: 90%;
  margin: 0 auto;
  gap: 12px;
  margin-top: 12px;
`;