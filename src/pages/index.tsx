import type { NextPage } from 'next';
import { Banner } from '../components/Banner';
import { Products } from '../components/Products';
import { Container } from '../styles/homeStyles';

const Home: NextPage = () => {
  return (
    <Container>
      <Banner/>
      <div className="wrapper">
        <Products/>
        <div className="div"></div>
      </div>
    </Container>
  )
} 

export default Home
