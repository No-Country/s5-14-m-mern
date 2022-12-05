import { useState } from "react";
import PropTypes from "prop-types";
import "keen-slider/keen-slider.min.css";
import style from "./card.module.sass";
import Rate from "../Stars/Stars";
import hoverIm from "../../../../assets/Icons/hover.svg";
// import imgDefault from "../../../../assets/Imagescards/cardDefault.svg";
import { Link } from "react-router-dom";

const Card = ({
  gameId,
  cover,
  name,
  stars,
  description,
  minAge,
  path,
  folder,
  size,
  onlyShow = false,
  comingSoon,
  devices
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div className={size !== "small" ? "keen-slider__slide" : null}>
      <div
        className={`${style.card} ${size === "small" ? style.card_small : null}`}
        // onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}>
        // <Link to={path} state={{ gameId, name, stars, description, minAge, path, folder }}>

        onMouseEnter={!onlyShow ? () => setHover(true) : undefined}
        onMouseLeave={!onlyShow ? () => setHover(false) : undefined}>
        <Link to={path} state={{ name, stars, description, minAge, path, folder }}>
          <img src={cover} alt={name} />
        </Link>
        <h5>{name}</h5>
        {hover && (
          <div className={style.is_hover}>
            <Rate change={false} stars={stars} />
            <Link
              to={path}
              state={{ gameId, name, stars, description, minAge, path, folder, devices }}>
              <img src={hoverIm} alt="" />
            </Link>
          </div>
        )}
      </div>
      <span className={style.display_mob}>
        <Rate change={false} stars={stars} />
      </span>
      {onlyShow && !comingSoon && (
        <span className={style.show_stars}>
          <Rate change={false} stars={stars} />
        </span>
      )}
    </div>
  );
};

Card.propTypes = {
  gameId: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number,
  description: PropTypes.string,
  minAge: PropTypes.string,
  path: PropTypes.string,
  folder: PropTypes.string,
  size: PropTypes.string,
  comingSoon: PropTypes.bool,
  onlyShow: PropTypes.bool
};

export default Card;
