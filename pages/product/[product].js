import React, { useState, useEffect, useRouter } from 'react'
import { getData } from '../../utils/fetchData'
import Breadcrumbs from '../../components/Breadcrumbs'
import ProductCard from '../../components/ProductCard'

const router = useRouter()

const Product = ({ productProps, breadcrumbsProps }) => {
  const initBreadcrumbs = [
    { name: 'home', chpu: '/' },
    { name: 'Каталог', chpu: '/catalog' },
  ]

  const [breadcrumbs, setBreadcrambs] = useState(initBreadcrumbs)

  useEffect(() => {
    setBreadcrambs(() => {
      return initBreadcrumbs.concat(breadcrumbsProps)
    })
  }, [breadcrumbsProps])

  return (
    <>
      <Breadcrumbs
        breadcrumbs={breadcrumbs.map((el, i) => {
          if (i <= 1) return el
          return { ...el, chpu: `/${el.chpu}` }
        })}
      />
      {productProps === null ? (
        router.push(404)
      ) : (
        <ProductCard productProps={productProps} />
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const productChpu = encodeURIComponent(context.query.product)
  const urlProductChpu = `/product?productChpu=${productChpu}`
  console.log('test')

  const resProduct = await getData(urlProductChpu)
  console.log('@@@', resProduct)

  const product = resProduct?.product[0] || null
  const breadcrumbs = product?.breadcrumbs || null

  return {
    props: {
      productProps: product,
      breadcrumbsProps: breadcrumbs,
    },
  }
}

export default Product
