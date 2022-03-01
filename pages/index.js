import { getData } from '../utils/fetchData'
import { NextSeo } from 'next-seo'

const Home = ({ categoryProps }) => {
  return (
    <>
      <NextSeo
        title="Лампы, светильники и провод: Интернет магазин ламп, светильников и проводов Мой Свет | Киев, Харьков, Одесса, Днепр, Запорожье, Львов"
        description="Более 3000 видов ламп, светильников, проводов в интернет магазине Мой Свет. Купить провод в Киеве, Харькове, Одессе. Бесплатная доставка по всей Украине"
      />
      <div className="wrapper c-container">
        <h1>Home</h1>
        <pre style={{ overflow: 'hidden' }}>
          {JSON.stringify(categoryProps, null, 4)}
        </pre>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await getData(`category?parentChpu=''`)
  return {
    props: {
      categoryProps: res.categories,
      result: res.result,
    }, // will be passed to the page component as props
  }
}

export default Home
