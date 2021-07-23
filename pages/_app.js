import '../styles/globals.scss'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout title={''}>
      <Component {...pageProps} />
    </Layout>
  )
}
