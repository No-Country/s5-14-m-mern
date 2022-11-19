import React, { useState } from 'react'
import "keen-slider/keen-slider.min.css"
import './card.sass'
import Rate from '../Stars/Stars';
import hoverIm from '../../../../assets/Icons/hover.svg'


const Card = ({imageUrl, name, stars}) => {
  
  const [rating, setRating] = useState(stars);
  const [hover, setHover] = useState(false)

  return (
    <div className='keen-slider__slide'>
      <div className='card'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
      >
        <img src={imageUrl} alt={name} />
        <h5>{name}</h5> 
        {hover && (<div className='is-hover'>
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          <img src={hoverIm} alt="" />
        </div>)}       
      </div>
      <span className='display-mob'><Rate rating={rating} onRating={(rate) => setRating(rate)} /></span>
    </div>
  )
}

export default Card