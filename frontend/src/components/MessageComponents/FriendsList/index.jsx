import PropTypes from "prop-types";
import styles from "./friendsList.module.sass";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router-dom";

export default function FriendsList({ friendsList }) {
  const [sliderRef, _] = useKeenSlider({
    slides: { perView: 3, spacing: 0 }
  });
  return (
    <div className={styles.container}>
      <div ref={sliderRef} className="keen-slider">
        {friendsList.map(({ image, name, userId }) => {
          return (
            <Link to={`/messages/${userId}`} key={image} className={styles.link}>
              <div className="keen-slider__slide" key={image}>
                <img src={image} alt="friends" />
                <p>{name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

FriendsList.propTypes = {
  friendsList: PropTypes.array
};
