import { useState } from "react";
import PropTypes from "prop-types";
import "keen-slider/keen-slider.min.css";
import style from "./card.module.sass";
import Rate from "../Stars/Stars";
import hoverIm from "../../../../assets/Icons/hover.svg";
import imgDefault from "../../../../assets/Imagescards/cardDefault.svg";
import { Link } from "react-router-dom";

const Card = ({ imageUrl, name, stars, description, minAge, path, size }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className={size !== "small" ? "keen-slider__slide" : undefined}>
      <div
        className={`${style.card} ${size === "small" ? style.card_small : undefined}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <Link to={path} state={{ name, stars, description, minAge, headerTitle: "Juegos" }}>
          <img src={!imageUrl ? imgDefault : imageUrl} alt={name} />
        </Link>
        <h5>{name}</h5>
        {hover && (
          <div className={style.is_hover}>
            <Rate type="card" rating={stars} />
            <Link to={path} state={{ name, stars, description, minAge, headerTitle: "Juegos" }}>
              <img src={hoverIm} alt="" />
            </Link>
          </div>
        )}
      </div>
      <span className={style.display_mob}>
        <Rate type="card" rating={stars} />
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
  path: PropTypes.string,
  size: PropTypes.string
};

export default Card;
