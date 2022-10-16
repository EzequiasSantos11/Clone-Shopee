import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  .links{
    display: flex;
    background: green;
    height: 39px;
    width: 100%;
    border-bottom: 1px solid #333;
    align-items: center;
    justify-content: space-around;
  }
 
`;


export const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 39px;
  justify-content: space-around;
  padding: 0 20px;
  align-items: center;
  background: red;
  ul{
    display: flex;
    gap: 4px;
    li{
      color: #FFF;
      font-size: .8125rem;
      font-weight: 700;
      padding: 6px;
      border-right: 1px solid rgba(255, 255, 255, 0.6);
      cursor: pointer;
      &:last-child{
        border-right: none;
      }
    }
  }
`;


export const HeaderStyles = styled.div`
display: flex;
background: red;
display: flex;
height: 85px;
width: 100%;
align-items: center;
justify-content: center;
.logo{
  display: flex;
  align-items: center;
  color: #fff;
  width: 30%;
  svg{
    font-size: 1.9rem;
    fill: #FFF;
    margin-right: 5px;
  }
  h1{
    padding-left: 5px;
    border-left: 1px solid #FFF;
  }
}
.actions{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 60%;
  .card{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100px;
    position: relative;
    cursor: pointer;
    svg{
      color: #fff;
      font-size: 1.8rem;
    }
    span{
      border-radius: 50%;
      padding: 2px 4px;
      background: #FFF;
      color: red;
      font-size: 14px;
      font-weight: bold;
      position: absolute;
      top: -4px;
      right: 22px;
      border: 1px solid red;
    }
  }
  }
`;