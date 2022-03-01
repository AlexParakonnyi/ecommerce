import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ScrollLayout from '../ScrollLayout-copy'

const ProductCard = ({ productProps }) => {
  const [product, setProduct] = useState(productProps)
  const initialHref = () => `/img/products/${product?.images[0]?.name}`
  const [imageHref, setImageHref] = useState(() => {
    return initialHref()
  })

  useEffect(() => {
    setProduct(productProps)
  }, [productProps])

  const hoverHandler = (i) => {
    setTimeout(() => {
      setImageHref(`/img/products/${product?.images[i]?.name}`)
    }, 50)
  }

  return (
    <>
      <div className="c-card">
        <div className="c-card__image-block">
          <div className="c-card__image-list">
            <ScrollLayout
              options={{
                sliderWIdth: '6px',
                history: false,
                sliderPath: false,
                arrowUp: false,
              }}
            >
              {product.images.map((el, i) => {
                return (
                  <div
                    className="image-list__item"
                    onMouseOver={() => hoverHandler(i)}
                    onTouchStart={() => hoverHandler(i)}
                    key={el.name + i}
                  >
                    <Image
                      src={`/img/products/${el.name}`}
                      alt={product.name + i}
                      width={168}
                      height={168}
                      objectFit="contain"
                      layout="intrinsic"
                    />
                  </div>
                )
              })}
            </ScrollLayout>
          </div>
          <div className="c-card__main-image">
            <Image
              src={imageHref}
              alt={product.name}
              width={560}
              height={520}
              objectFit="contain"
              // layout="intrinsic"
            />
          </div>
        </div>
        <div className="c-card__info info">
          <h1 className="info__title">{product.name}</h1>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        accusamus, incidunt aut dolorem quibusdam velit aliquid. Sit natus
        inventore quibusdam quia pariatur quis minima aut reiciendis
        repellendus, optio earum distinctio adipisci nisi autem voluptate
        provident cumque eveniet! Ducimus iusto temporibus beatae, illo autem,
        aut ut maiores id eum consequuntur at incidunt dolorum quasi voluptatum
        rerum recusandae! Explicabo eius aliquid a ut molestiae aliquam iure
        libero animi quaerat omnis eaque quasi vel nulla, iusto sapiente ullam
        atque amet fugiat! Impedit dolores, veritatis cupiditate aliquam
        repellendus maxime delectus velit eos voluptatum distinctio similique,
        magni voluptatem, molestias quisquam dicta temporibus perferendis
        excepturi officia explicabo ad ipsa. Cumque facere omnis quisquam, ipsa
        dolor, rem ad hic accusantium qui tempore iusto expedita repellendus
        temporibus? Itaque maxime exercitationem animi numquam optio, et dolore
        magnam minus cum error blanditiis corrupti pariatur quaerat omnis ipsa
        tenetur enim magni. Ea nesciunt consectetur excepturi blanditiis
        incidunt dicta, sunt expedita eveniet libero labore fugit iusto repellat
        illum reprehenderit aut et commodi explicabo atque dolores quis ipsum
        at. Eius aspernatur cupiditate qui dignissimos deserunt hic, voluptatum
        veniam magnam rerum suscipit asperiores distinctio architecto dicta
        laboriosam. Magni unde suscipit, eligendi assumenda asperiores
        laboriosam vero iure excepturi nostrum quisquam neque repellat!
        Asperiores, perspiciatis. Facere consectetur, ut expedita officia
        numquam amet! Perferendis atque ad, animi omnis aliquam quidem mollitia
        eos dignissimos vitae nihil nobis placeat architecto quasi ratione, illo
        nemo accusantium rem, molestias corrupti qui a voluptates corporis
        doloribus? Veritatis reprehenderit fuga earum. Inventore obcaecati
        aperiam, accusantium quos, officiis eum at exercitationem labore
        doloremque atque quibusdam sunt culpa repellendus, reprehenderit enim
        impedit. Nulla nisi error, eum vero voluptatum unde impedit mollitia
        omnis velit voluptatem dignissimos dolorem sapiente cupiditate minima!
        A, magnam doloremque earum sint veritatis repellat et aut atque
        consequatur minus nostrum non deleniti sit magni aspernatur, similique
        ex libero iste sapiente pariatur. Rerum impedit necessitatibus eveniet
        aperiam quam, vero ut praesentium adipisci totam nihil amet ex quod
        minima? Fuga inventore optio et numquam fugiat iste harum voluptas
        explicabo facere qui saepe asperiores commodi, cupiditate dolores
        impedit praesentium, voluptates quidem nostrum? Tempore, architecto?
        Corporis, aut deserunt sit dolores reprehenderit assumenda illo commodi
        reiciendis vitae, impedit, alias aliquid laborum excepturi id eum
        debitis. Corrupti saepe a similique quis blanditiis libero, quidem
        eaque, deleniti illum, eius ex quasi. Quos, commodi quaerat rem
        voluptates excepturi explicabo nisi, adipisci hic asperiores placeat
        sunt distinctio saepe, mollitia a eos optio labore esse inventore unde
        vero? Dolorem sed commodi saepe mollitia, optio exercitationem natus
        nihil voluptatum? Quaerat, tempora rem ducimus minus consequuntur sunt.
        Facere et officiis assumenda saepe laboriosam consectetur illo mollitia
        explicabo maiores? Iure enim, vitae similique quae numquam perspiciatis
        veritatis doloremque adipisci cum ea minima dicta ipsum architecto
        molestias, placeat id dolorem illum vel distinctio voluptates error
        expedita accusamus totam recusandae? Quidem laborum ipsum beatae. Magni
        autem reiciendis excepturi eos, explicabo nulla aperiam deleniti dolore
        nesciunt fuga obcaecati odit minus officia earum ipsam cum soluta nihil
        dolorem omnis. Veritatis, sunt inventore voluptate praesentium ducimus
        enim est repellendus velit explicabo vitae adipisci natus aspernatur at
        eius possimus doloremque reprehenderit ipsum!
      </p>
    </>
  )
}

export default ProductCard
