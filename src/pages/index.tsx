import type { NextPage } from 'next';
import { LoginForm } from '../components/Forms/LoginForm';
import { Container } from '../styles/homeStyles';

const Home: NextPage = () => {
  return (
    <Container>
      <LoginForm/>
    </Container>
  )
} 

export default Home
