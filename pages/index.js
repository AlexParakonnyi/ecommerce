import { getData } from '../utils/fetchData'

const Home = ({ res }) => {
  return (
    <div className="wrapper c-container">
      <h1>Home</h1>
      <pre style={{ overflow: 'hidden' }}>{JSON.stringify(res, null, 4)}</pre>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await getData('category')
  return {
    props: { res }, // will be passed to the page component as props
  }
}

export default Home
