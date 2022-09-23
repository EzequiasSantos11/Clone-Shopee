import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import GlobalStyles, { Container } from '../styles/globalStyles';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Sidebar/>
      <Component {...pageProps} />
      <GlobalStyles/>
    </Container>
  )
}

export default MyApp
