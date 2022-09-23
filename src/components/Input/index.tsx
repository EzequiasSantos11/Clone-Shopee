import { InputHTMLAttributes, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { inputTimeMask } from "../../helpers/inputMasks";
import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  label?: string,
  type: string,
  placeholder?: string,
  onchange?: (e: any)=>void;
};

export function Input({ label, type, placeholder, onchange, ...rest }: Props){

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
    case "textarea":
      return(
        <Container>
          <label>{label}</label>
          <textarea 
            name={label} 
            id={label} 
            cols={30} 
            rows={5} 
            placeholder={placeholder}
            onChange={onchange}
          >
          </textarea>
        </Container>
      )
      break
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
          <input {...rest} type={type} placeholder={placeholder} />
        </Container>
      )
  }

};