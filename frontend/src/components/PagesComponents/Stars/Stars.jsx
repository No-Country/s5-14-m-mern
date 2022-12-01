import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import style from "./stars.module.sass";

const Rate = ({ count, rating, color, onRating, type }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = index => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }
    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map(idx => (
        <i
          className={`bi bi-star-fill ${style.star_icon}`}
          key={idx}
          style={{ color: getColor(idx) }}
          onClick={type !== "card" ? () => onRating(idx) : undefined}
          onMouseEnter={type !== "card" ? () => setHoverRating(idx) : undefined}
          onMouseLeave={type !== "card" ? () => setHoverRating(0) : undefined}></i>
      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};

Rate.propTypes = {
  count: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  color: PropTypes.shape({
    filled: PropTypes.string,
    unfilled: PropTypes.string
  }),
  onRating: PropTypes.func,
  type: PropTypes.string
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#000"
  }
};

export default Rate;
