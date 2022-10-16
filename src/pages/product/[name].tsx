import { useRouter } from "next/router";
import Button from "../../components/Button";
import { Container } from "../../styles/productStyles";


export default function Product(){
  const { isFallback, query } = useRouter();
  const { name } = query;
  return(
    <Container>
      <ul className="categories">
        <li>produto &rarr;</li> <li>produto &rarr;</li> <li>produto &rarr;</li> <li>produto &rarr;</li> <li>produto &rarr;</li> <li>produto &rarr;</li> <li>produto</li>
      </ul>
      <div className="wrapper">
        <div className="images">
          <img src="/barbeador.jfif" alt="" />
          <div className="card">
            <img src="/barbeador.jfif" alt="" />
            <img src="/barbeador.jfif" alt="" />
            <img src="/barbeador.jfif" alt="" />
          </div>
        </div>
        <div className="infos">
          <h1>{name} ultra mega blaster super maravilhoso incrivel sensassional exuberante</h1>
          <div className="infosForSale">
            <a href="">4.5 ****</a>
            <a href="">54 avaliações</a>
            <a href="">212 vendidos</a>
          </div>
          <div className="price">
            <s>R$ 9,45</s>
            <strong>R$ 1,99</strong>
            <span>70% OFF</span>
          </div>
          <div className="promotion">
            <span>Leve mais por menos</span>
            <span>Leve 5 aproveite 2% de desconto</span>
          </div>
          {/* <div className="calcFrete">
            Aqui entrará o calculo de frete mediante api dos correios "caso possível"
          </div> */}
          <div className="attributes">
            <span>Cor</span>
            <button>Preto</button>
            <button>Branco</button>
          </div>
          <div className="quant">
            <span>Quantidade</span>
            <input type="number" max={10} min={1} />
            <span>700 unidades disponiveis</span>
          </div>
          <div className="actions">
            <Button danger textButton="Adicionar ao carrinho"/>
            <Button textButton="Comprar agora"/>
          </div>
        </div>
      </div>  
    </Container>
  )
}

