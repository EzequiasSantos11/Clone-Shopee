import type { AppProps } from 'next/app';
import GlobalStyles, { Container } from '../styles/globalStyles';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
      <GlobalStyles/>
    </Container>
  )
}

export default MyApp
