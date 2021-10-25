import Head from 'next/head'
import CategoryItem from '../CategoryItem'
import { getData } from '../../utils/fetchData'
import { NextSeo } from 'next-seo'

const CategoriesConteiner = ({
  categories,
  parent = { name: '' },
  children,
}) => {
  return (
    <>
      <NextSeo title={parent?.title} description={parent?.metaDescription} />
      <Head>
        <meta name="keywords" content={parent?.keys}></meta>
      </Head>
      <div className="c-container c-catalog">
        {categories.length === 0 ? null : (
          <div className="c-catalog__wrapper">
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
      {children}

      <p
        className="c-catalog__description"
        dangerouslySetInnerHTML={{ __html: parent?.description }}
      ></p>
    </>
  )
}

export async function getServerSideProps(context) {
  const chpu = encodeURIComponent(context.query.categoryChpu)
  const res = await getData(`/category?categoryChpu=${chpu}`)

  return {
    props: {
      parent: res.category,
    },
  }
}

export default CategoriesConteiner
