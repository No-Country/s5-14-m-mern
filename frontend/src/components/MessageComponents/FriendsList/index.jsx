// styles
import styles from "./friendsList.module.sass";
import "keen-slider/keen-slider.min.css";

// libraries
import PropTypes from "prop-types";
import { useKeenSlider } from "keen-slider/react";

// hooks
import { useDispatch } from "react-redux";
import {
  setFirstSectionOfPage,
  setCurrentUser
} from "../../../redux/slices/messages/messagesSlice";
import { useMediaQuery } from "react-responsive";

// utils
import { CHAT_SETIONS } from "../utils/chatSetions";
import { useNavigate } from "react-router-dom";

export default function FriendsList({ friendsList }) {
  const dispatch = useDispatch();
  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 8 }
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 778px)"
  });
  const navigate = useNavigate();

  const handledPage = data => {
    if (!isTablet) {
      navigate("/messages/options");
    }
    dispatch(setCurrentUser(data));
    dispatch(setFirstSectionOfPage(CHAT_SETIONS.userOptions));
  };
  return (
    <div className={styles.container}>
      <div ref={sliderRef} className="keen-slider">
        {friendsList.map(({ image, name, userId, ...props }) => {
          return (
            <div
              className={`keen-slider__slide ${styles.slide}`}
              key={userId}
              onClick={() => handledPage({ image, name, userId, ...props })}
            >
              <img src={image} alt="friends" />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

FriendsList.propTypes = {
  friendsList: PropTypes.array
};
