import styled, { keyframes } from "styled-components";
import { Keyframes } from "styled-components";


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
  .form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 490px;
    width: 60%;
    background: #F1F1F1;
    border-radius: 10px;
    animation: ${AnimationModal} 1s forwards;
    input{
      border-radius: 8px;
      border: 1px solid #E8E8E8;
    }
    .date{
      display: flex;
      margin: 20px auto;
      width: 60%;
      gap: 50px;
    }
    .actions{
      display: flex;
      gap: 32px;
      margin-top: 20px;
    }
  }
`;