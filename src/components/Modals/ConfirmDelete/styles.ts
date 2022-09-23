import styled, { keyframes } from "styled-components";


const AnimationModal = keyframes`
  to{
    transform: translateY(0);
  }from{
    transform: translateY(-20rem);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 490px;
    width: 60%;
    background: #F1F1F1;
    border-radius: 10px;
    animation: ${AnimationModal} 1s forwards;
    h1{
      font-size: 20px;
      text-align: center;
      width: 70%;
    }
    .event{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title{
        h2{
          font-size: 2rem;
        }
        p{
          font-size: 1.3rem;
        }
      }
      .time{
        display: flex;
        gap: 20px;
      }
    }
    .actions{
      display: flex;
      gap: 32px;
      margin-top: 20px;
    }
  }
`;