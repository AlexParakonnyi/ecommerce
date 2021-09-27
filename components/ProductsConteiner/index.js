import Head from 'next/head'
import CategoryItem from '../Category/categoryItem'

const ProductsConteiner = ({ categories }) => {
  return (
    <div className="c-container c-catalog">
      <Head>
        <title>Каталог Мой Cвет</title>
      </Head>
      <h1>Общий каталог</h1>
      <div className="c-catalog__wrapper">
        {categories.length === 0 ? (
          <h2>Категорий товаров не существует</h2>
        ) : (
          categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))
        )}
      </div>
    </div>
  )
}

export default ProductsConteiner
