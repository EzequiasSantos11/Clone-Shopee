import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 450px;
  width: 90%;
  margin: 40px auto;
  border-radius: 10px;
  .category{
    display: flex;
    align-items: center;
    height: 5rem;
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background: #FFF;
    padding: 0 20px;
    position: sticky;
    top: 7.5rem;
    z-index: 999;
    box-shadow: 0 0 2px rgba(0,0,0,0.2);
    margin-bottom: 20px;
    .title{
      display: flex;
      align-items: center;
      width: 100%;
      h2{
        font-size: 22px;
        font-weight: 400;
        padding-right: 5px;
        margin-right: 5px;
        border-right: 1px solid gray;
      }
      .attributesCategory{
        display: flex;
        align-items: center;
        gap: 10px;
        span{
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
    button{
      background: none;
      width: 120px;
      cursor: pointer;
      font-weight: 400;
    }
  }
  .products{
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    .card{
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 283px;
      width: 90%;
      max-width: 200px;
      margin: 10px auto;
      box-shadow: 0 0 4px rgba(0,0,0,0.3);
      position: relative;
      cursor: pointer;
      background: #FFF;
      img{
        height: 60%;
        width: 100%;
      }
      strong{
        margin: 10px 0;
        height: 20%;
      }
      .aboutTheSale{
        display: flex;
        align-items: baseline;
        width: 85%;
        justify-content: space-between;
        margin: 0 auto;
        strong{
          font-size: 14px;
          font-weight: normal;
        }
        span{
          font-size: 14px;
        }
      }
    }
  }
`;