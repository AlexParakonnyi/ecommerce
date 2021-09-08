import React from 'react'
import Icon from '../../public/img/icons/search.svg'

const Search = () => {
  return (
    <>
      <div className="search--extra-small">
        <div className="icon-link">
          <Icon className="icon-link__image" />
        </div>
      </div>
      <div className="search">
        <div className="search__icon-wrapper">
          <Icon className="search__icon" />
        </div>
        <input type="text" className="search__input" placeholder="Я ищу..." />
        <button className="search__action action">
          <span className="action__text">Найти</span>
        </button>
      </div>
    </>
  )
}

export default Search
