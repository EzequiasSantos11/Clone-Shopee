import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  textButton: string,
  danger?: boolean,
};

export default function Button({
    danger,
    textButton,
    ...rest
  }: Props){
  return(
    <Container {...rest} className={danger ? "delete" : ""}>
      {textButton}
    </Container>
  )
};