import React from 'react'
import './card.sass'


const Card = ({imageUrl, name}) => {
  return (
    <div className='card'>
        <img src={imageUrl} alt={name} />
        <h5>{name}</h5>
    </div>
  )
}

export default Card