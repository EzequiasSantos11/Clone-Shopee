import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  textButton: string,
};

export default function Button({ textButton, ...rest}: Props){
  return(
    <Container {...rest}>
      {textButton}
    </Container>
  )
};