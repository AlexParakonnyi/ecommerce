import React, { useState, useEffect } from 'react'
import { getData } from '../utils/fetchData'
import ProductsConteiner from '../components/ProductsConteiner'

const Group = (props) => {
  const [categories, setCategories] = useState(props.categoryProps)

  useEffect(() => {
    setCategories(props.categoryProps)
  }, [props.categoryProps])

  return <ProductsConteiner categories={categories} />
}

export async function getServerSideProps(context) {
  const chpu = encodeURIComponent(context.query.product)

  const url = `/category?productChpu=${chpu}`
  const resCat = await getData(url)

  return {
    props: {
      categoryProps: resCat.categories,
      result: resCat.result,
    }, // will be passed to the page component as props
  }
}

export default Group
