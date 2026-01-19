import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img className="image" src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" alt="card image" />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default Card