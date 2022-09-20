import Button from "../Button";
import { Input } from "../Input";
import { Container } from "./styles";

interface Props {
    
};

export default function Header(props: Props){
  return(
    <Container>
      <div className="date">
        <h1>Janeiro</h1>
        <p>Quinta-feira - 4 de Jan - 2022</p>
      </div>
      <div className="actions">
        <Button textButton="+Criar evento"/>
        <Input  type="search" placeholder="Search task, event, calendar" />
      </div>
      <div className="icons">
        <img src="/notification.svg" alt="" />
        <img src="/profile.svg" alt="" />
      </div>
    </Container>
  )
};