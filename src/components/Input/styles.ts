import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
  width: 60%;
  position: relative;
  label{
    font-size: 18px;
  }
  input{
    width: 100%;
    height: 36px;
    border: none;
    outline: none;
    padding: 0 30px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    background: #514769;
    color: #f1f1f1;
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #AEAEAE;
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #AEAEAE;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: #AEAEAE;
    }
  }
  textarea{
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 8px;
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #AEAEAE;
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #AEAEAE;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: #AEAEAE;
    }
  }
  .password{
    display: flex;
    position: relative;
    svg{
      position: absolute;
      top: 30%;
      bottom: 0;
      right: 10px;
      z-index: 999;
      font-size: 18px;
      cursor: pointer;
    }
  }
 
`;