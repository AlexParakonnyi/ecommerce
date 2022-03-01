import Head from 'next/head'
import CategoryItem from '../CategoryItem'
import { NextSeo } from 'next-seo'

const CategoriesContainer = ({
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

      <div
        className="c-catalog__description"
        dangerouslySetInnerHTML={{ __html: parent.description }}
      ></div>
    </>
  )
}

export default CategoriesContainer
