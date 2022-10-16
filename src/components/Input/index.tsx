import { InputHTMLAttributes, useState } from "react";
import Icons from "../Icons";
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
              <Icons.IconAi.AiOutlineEye onClick={()=>setPasswordVisible(false)}/>
            ):(
              <Icons.IconAi.AiOutlineEyeInvisible onClick={()=>setPasswordVisible(true)}/>
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
        <Container className="search">
          <div className="icon">
            <Icons.IconRi.RiSearch2Line/>
          </div>
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