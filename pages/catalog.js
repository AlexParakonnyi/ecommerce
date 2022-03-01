import { useState, useEffect } from 'react'
import { getData } from '../utils/fetchData'
import CategoriesContainer from '../components/CategoriesContainer'
import Breadcrumbs from '../components/Breadcrumbs'

const Catalog = (props) => {
  const [categories, setCategories] = useState(props.categoryProps)
  const initBreadcrumbs = [
    { name: 'home', chpu: '/' },
    { name: 'Каталог', chpu: '/catalog' },
  ]

  useEffect(() => {
    setCategories(props.categoryProps)
  }, [props.categoryProps])

  return (
    <>
      <Breadcrumbs breadcrumbs={initBreadcrumbs} />
      <CategoriesContainer categories={categories} />
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

export default Catalog
