import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  .wrapper{
    display: grid;
    width: 90%;
    height: 290px;
    grid-template-columns: 3fr 2.5fr;
    grid-template-rows: 50% 50%;
    grid-template-areas: "banner children" "banner children2";
    gap: 10px;
    margin: 40px auto;
    .banner{
      display: flex;
      grid-area: banner;
      background: #4999;
      position: relative;
      img{
        position: absolute;
        height: 100%;
        width: 100%;
      }
    }
    .children{
      background: #922992;
      display: flex;
      grid-area: children;
      position: relative;
      img{
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .children2{
      background: red;
      display: flex;
      grid-area: children2;
      position: relative;
      img{
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .points{
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
    gap: 20px;
    .card{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
      border-radius: 8px;
      cursor: pointer;
      transition: all .4s ease;
      &:hover{
        transform: translateY(-5px);
      }
      span{
        padding: 8px 10px;
        border-radius: 4px;
        border: 1px solid gray;
        svg{
          font-size: 2rem;
        }
      }
      p{
        margin-top: 10px;
        font-size: 16px;
      }
    }
  }
`;