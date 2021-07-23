import React from 'react'
import NavBar from './NavBar'

function Layout({ children, title, description }) {
  return (
    <div className="container">
      <NavBar></NavBar>
      {children}
    </div>
  )
}

export default Layout

// import Head from 'next/head'
// import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import t from './header.module.scss'
// import Image from 'next/image'

// export default function Header({
//   children,
//   title = 'Интернет магазин светотехники',
// }) {
//   return (
//     <>
//       <Head>
//         <title>{title} | Мой свет</title>
//         <meta charSet="UTF-8"></meta>
//         <meta name="description" content="Магазин светотехники"></meta>
//         <meta name="keywords" content="Светотехника"></meta>
//         <meta name="author" content="Alex"></meta>
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1.0"
//         ></meta>
//         <script
//           src="https://kit.fontawesome.com/71ad109606.js"
//           crossOrigin="anonymous"
//         ></script>
//       </Head>
//       <nav>
//         {/* <FontAwesomeIcon icon={faBars} className={t.icon} /> */}
//         {/* <Image
//           className={t.icon}
//           src="/list.svg"
//           alt="Menu bars"
//           width={25}
//           height={25}
//         ></Image> */}
//         {/* <div className={t.icon}></div> */}
//         <Link href="/">
//           <a>Logo</a>
//         </Link>
//         <Link href="/about">
//           <a>Search</a>
//         </Link>
//         <Link href="/products">
//           <a>Products</a>
//         </Link>
//       </nav>
//       <main className="main">{children}</main>
//     </>
//   )
// }
