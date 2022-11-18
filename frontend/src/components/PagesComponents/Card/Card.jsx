import React from 'react'
import "keen-slider/keen-slider.min.css"
import './card.sass'


const Card = ({imageUrl, name}) => {
  return (
    <div className='keen-slider__slide card'>
        <img src={imageUrl} alt={name} />
        <h5>{name}</h5>
    </div>
  )
}

export default Card