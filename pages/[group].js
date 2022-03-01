import React, { useState, useEffect } from 'react'
import { getData } from '../utils/fetchData'
import CategoriesContainer from '../components/CategoriesContainer'
import ProductsContainer from '../components/ProductsContainer'
import Breadcrumbs from '../components/Breadcrumbs'

const Group = ({
  categoriesProps = '',
  parentProps = '',
  productsProps = [],
  breadcrumbProps,
}) => {
  const [categories, setCategories] = useState(categoriesProps)
  const [parent, setParent] = useState(parentProps)
  const [products, setProducts] = useState(productsProps)
  const initBreadcrumbs = [
    { name: 'home', chpu: '/' },
    { name: 'Каталог', chpu: '/catalog' },
  ]
  const [breadcrumbs, setBreadcrambs] = useState(initBreadcrumbs)

  useEffect(() => {
    setCategories(categoriesProps)
  }, [categoriesProps])

  useEffect(() => {
    setParent(parentProps)
  }, [parentProps])

  useEffect(() => {
    setProducts(productsProps)
  }, [productsProps])

  useEffect(() => {
    setBreadcrambs(() => {
      return initBreadcrumbs.concat(breadcrumbProps)
    })
  }, [breadcrumbProps])

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {parent === '' ? null : (
        <CategoriesContainer categories={categories} parent={parent}>
          <ProductsContainer products={products} />
        </CategoriesContainer>
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const parentChpu = encodeURIComponent(context.query.group)
  const urlParent = `/category?parentChpu=${parentChpu}`
  const resParent = await getData(urlParent)
  console.log('test')

  const urlParentProducts = `/product?parentChpu=${parentChpu}`
  const resProducts = await getData(urlParentProducts)

  console.log('$$$', resProducts)

  if (!resParent.category) return { notFound: true }

  return {
    props: {
      categoriesProps: resParent.categories,
      result: resParent.result,
      parentProps: resParent.category,
      productsProps: resProducts.products,
      breadcrumbProps: resParent.category.breadcrumbs,
    }, // will be passed to the page component as props
  }
}

export default Group
