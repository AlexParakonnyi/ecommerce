import { getData } from '../utils/fetchData'

const Home = ({ categoryProps }) => {
  return (
    <div className="wrapper c-container">
      <h1>Home</h1>
      <pre style={{ overflow: 'hidden' }}>
        {JSON.stringify(categoryProps, null, 4)}
      </pre>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await getData('category')
  return {
    props: {
      categoryProps: res.categories,
      result: res.result,
    }, // will be passed to the page component as props
  }
}

export default Home
