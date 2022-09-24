import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import GlobalStyles from '../styles/globalStyles';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles/>
    </>
  )
}

export default MyApp
