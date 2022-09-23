import ItemList from "../ItemList";
import { BsCalendar4Week } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { Container, Logo, Nav } from "./styles";

interface Props {
    
};

export default function Sidebar(props: Props){
  return(
    <Container>
      <Logo>
        <img src="/logo.svg" alt="" />
      </Logo>
      <Nav>
        <ItemList active titleItem="Agenda" linkItem="/" iconItem={<BsCalendar4Week/>}/>
        <ItemList titleItem="Mensagens" linkItem="/" iconSrc={"/message.svg"}/>
        <ItemList titleItem="Relatórios" linkItem="/" iconSrc={"/graphic.svg"}/>
        
        <span className="account">My account</span>
        
        <ItemList titleItem="Meus eventos" linkItem="/" iconItem={<BiUserCircle/>}/>
        <ItemList titleItem="Meu time" linkItem="/" iconSrc={"/people.svg"}/>
        <ItemList titleItem="Minhas atividades" linkItem="/" iconSrc={"/board.svg"}/>
        
        <span className="system">System</span>
        <ItemList titleItem="Configurações" linkItem="/" iconSrc={"/setting.svg"}/>
        <ItemList titleItem="Sair" linkItem="/" iconSrc={"/logout.svg"}/>
      </Nav>
    </Container>
  )
}; 