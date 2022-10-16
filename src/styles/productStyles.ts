import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  margin-top: 20px;
  background: #f5f5f5;
  >ul{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 80%;
    margin: 0 auto;
  }
  .wrapper{
    display: flex;
    height: 100%;
    width: 80%;
    margin: 0 auto;
    margin-top: 1.5rem;
    background: #FFF;
    padding: 20px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    .images{
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      height: 450px;
      width: 450px;
      /* position: relative; */
      img{
        height: 80%;
        width: 100%;
      }
      .card{
        display: flex;
        background: #fff;
        /* position: absolute; */
        bottom: -10px;
        width: 100%;
        justify-content: space-around;
        padding-top: 6px;
        img{
          height: 80px;
          width: 90px;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all .4s ease;
          &:hover{
            transform: scale(1.1);
          }
        }
      }
    }
    .infos{
      display: flex;
      flex-direction: column;
      margin-left: 40px;
      h1{
        font-size: 2rem;
        font-weight: 500;
        text-transform: capitalize;
      }
      .infosForSale{
        display: flex;
        align-items: center;
        margin: 10px 0;
        gap: 20px;
        a{
          color: #000;
          font-size: 20px;
        }
      }
      .price{
        display: flex;
        align-items: center;
        margin: 20px 0;
        gap: 5px;
        strong{
          font-size: 2rem;
          font-weight: 500;
          color: red;
        }
      }
      .promotion{
        display: flex;
        gap: 20px;
        align-items: center;
        font-size: 18px;
      }
      .attributes{
        margin: 20px 0;
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 1rem;
        margin-top: 4rem;
        button{
          background: transparent;
          width: 200px;
          padding: 10px;
          cursor: pointer;
          border: 1px solid gray;
        }
      }
      .quant{
        display: flex;
        font-size: 18px;
        gap: 20px;
        input{
          border: 1px solid gray;
        }
      }
      .actions{
        display: flex;
        margin-top: 40px;
        gap: 20px;
        button{
          height: 40px;
          width: 200px;
          cursor: pointer;
        }
      }
    }
  }
`;