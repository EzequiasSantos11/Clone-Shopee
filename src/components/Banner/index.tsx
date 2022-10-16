import Icons from "../Icons";
import { Container } from "./styles";

interface Props {
    
};

export function Banner(props: Props){
  const categories = [
    {id: 1, title: "Moedas", icon: <Icons.IconRi.RiMoneyDollarCircleFill fill="red"/>, link: ""},
    {id: 2, title: "Jogos e prémios", icon: <Icons.IconIo.IoGameController fill="blue"/>, link: ""},
    {id: 3, title: "Frete grátis", icon: <Icons.IconHi.HiTruck fill="green"/>, link: ""},
    {id: 4, title: "Cupons", icon: <Icons.IconGi.GiTicket fill="orange"/>, link: ""},
    {id: 5, title: "Shopee oficial", icon: <Icons.IconBs.BsFillBagCheckFill fill="red"/>, link: ""},
    {id: 6, title: "Tecnologia", icon: <Icons.IconMd.MdSettingsCell fill="blue"/>, link: ""},
    {id: 7, title: "Clube de beleza", icon: <Icons.IconGi.GiLipstick fill="red"/>, link: ""},
    {id: 8, title: "Lives", icon: <Icons.IconBs.BsCameraReelsFill fill="orange"/>, link: ""},
    {id: 9, title: "Doações", icon: <Icons.IconAi.AiTwotoneGift fill="red"/>, link: ""},
    {id: 10, title: "Moda", icon: <Icons.IconFa.FaTshirt fill="brown"/>, link: ""},
  ]
  return(
    <Container>
      <div className="wrapper">
        <div className="banner">
          <img src="/corousel.png" alt="" />
        </div>
        <div className="children">
          <img src="/cupom.png" alt="" />
        </div>
        <div className="children2">
          <img src="/cupom.png" alt="" />
        </div>
      </div>
      <div className="points">
        {categories.map((item, index)=>(
          <div key={item.id} className="card">
            <span id={`svg${item.id}`}>
              {item.icon}
            </span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </Container>
  )
};