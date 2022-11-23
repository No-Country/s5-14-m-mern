import { useState } from "react";
import PropTypes from "prop-types";
import "keen-slider/keen-slider.min.css";
import "./card.sass";
import Rate from "../Stars/Stars";
import hoverIm from "../../../../assets/Icons/hover.svg";
import { Link } from "react-router-dom";

const Card = ({ imageUrl, name, stars, description, minAge, path }) => {
  const [rating, setRating] = useState(stars);
  const [hover, setHover] = useState(false);

  return (
    <div className="keen-slider__slide">
      <div
        className="card"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link to={path} state={{ name, stars, description, minAge }}>
          <img src={imageUrl} alt={name} />
        </Link>
        <h5>{name}</h5>
        {hover && (
          <div className="is-hover">
            <Rate rating={rating} onRating={rate => setRating(rate)} />
            <Link to={path} state={{ name, stars, description, minAge }}>
              <img src={hoverIm} alt="" />
            </Link>
          </div>
        )}
      </div>
      <span className="display-mob">
        <Rate rating={rating} onRating={rate => setRating(rate)} />
      </span>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number,
  description: PropTypes.string,
  minAge: PropTypes.number,
  path: PropTypes.string
};

export default Card;
