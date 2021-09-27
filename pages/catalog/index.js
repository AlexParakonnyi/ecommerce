import { useState, useEffect } from 'react'
import { getData } from '../../utils/fetchData'
import ProductsConteiner from '../../components/ProductsConteiner'

const Catalog = (props) => {
  const [categories, setCategories] = useState(props.categoryProps)

  useEffect(() => {
    setCategories(props.categoryProps)
  }, [props.categoryProps])

  return <ProductsConteiner categories={categories} />
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

export default Catalog
