import '../styles/globals.scss'
import Layout from '../components/Layout'
import { DataProvider } from '../Store/GlobalState'

export default function MyApp({ Component, pageProps }) {
  return (
    <DataProvider value={{}}>
      <Layout title={''}>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  )
}
