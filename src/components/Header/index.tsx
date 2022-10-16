import Icons from "../Icons";
import { Input } from "../Input";
import { Container, HeaderStyles, Nav } from "./styles";

interface Props {
    
};

export function Header(props: Props){
  return(
    <Container>
      <Nav>
        <ul>
         <li><a>Sobre este projeto</a></li>
         <li><a>Página do vendedor</a></li>
         <li><a>Baixe o app</a></li>
         <li><a>Siga-me nos: r n m</a></li>
        </ul>
        <ul>
         <li><a>Sobre este projeto</a></li>
         <li><a>Página do vendedor</a></li>
         <li><a>Baixe o app</a></li>
         <li><a>Siga-me nos: r n m</a></li>
        </ul>
      </Nav>
      <HeaderStyles>
        <div className="logo">
          <Icons.IconGi.GiAngularSpider/>
          <h1>Shopeeclone</h1>
        </div>
        <div className="actions">
          <Input type="search"/>
          <div className="card">
            <Icons.IconFi.FiShoppingCart/>
            <span>8</span>
          </div>
        </div>
      </HeaderStyles>
    </Container>
  )
};