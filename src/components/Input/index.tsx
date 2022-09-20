import { HTMLInputTypeAttribute, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { Container } from "./styles";

interface Props {
  label?: string,
  type: HTMLInputTypeAttribute,
  placeholder?: string,
};

export function Input({ label, type, placeholder, ...rest }: Props){

  const [ passwordVisible, setPasswordVisible ] = useState(false);
  
  switch(type){
    case "password":
      return(
        <Container>
          <label>{label}</label>
          <div className="password">
            <input {...rest} type={passwordVisible ? "text" : "password"}/>
            { passwordVisible ? (
              <AiOutlineEye onClick={()=>setPasswordVisible(false)}/>
            ):(
              <AiOutlineEyeInvisible onClick={()=>setPasswordVisible(true)}/>
            )}
          </div>
        </Container>
      )
    break;
    case "text":
      return(
        <Container>
          <label>{label}</label>
          <input {...rest} placeholder={placeholder} />
        </Container>
      )
      break;
    case "search":
      return(
        <Container>
          <RiSearch2Line/>
          <input {...rest} placeholder={placeholder} />
        </Container>
      )
      break;
    default:
      return(
        <Container>
          <label>{label}</label>
          <input {...rest} placeholder={placeholder} />
        </Container>
      )
  }

};