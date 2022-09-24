import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  color: #F1F1F1;
  gap: 40px;
  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
    .images{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      margin: 0 auto;
      margin-top: 40px;
      position: relative;
      gap: 20px;
      img{
        height: 180px;
        border-radius: 4px;
      }
      .image2{
        position: absolute;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        top: 40px;
      }
    }
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 30%;
    background: #302840;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0,0,0,0.4);
    gap: 15px;
    strong{
      font-size: 22px;
      width: 70%;
      text-align: center;
      color: #1CA5DF;
    }
    .actions{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      a{
        color: #82a7ff;
      }
    }
  }
  @media (max-width: 800px) { 
    .wrapper{
      display: none;
    }
    form{
      width: 90%;
      margin: 0 auto;
    }
  }
`;