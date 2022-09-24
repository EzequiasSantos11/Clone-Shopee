import Button from "../../Button";
import { Input } from "../../Input";
import { Container } from "./styles";

interface Props {
    
};

export function LoginForm(props: Props){
  return(
    <Container>
      <div className="wrapper">
        <h1>Bem vindo(a) ao seu sistema administrativo de sites.</h1>
        <span>By: Ezequias Santos / desenvolvedor</span>
        <div className="images">
          <img className="image1" src="/dashboardmod.jfif" alt="" />
          <img className="image2" src="/dashboardmod.jfif" alt="" />
          <img className="image3" src="/dashboardmod.jfif" alt="" />
        </div>
      </div>
      <form>
        <strong>Entre na sua conta para começar!</strong>
        <Input type="text" label="Usuário"/>
        <Input type="password" label="Senha"/>
        <div className="actions">
          <Button textButton="Entrar"/>
          <a href="">Saiba mais</a>
        </div>
      </form>
    </Container>
  )
};