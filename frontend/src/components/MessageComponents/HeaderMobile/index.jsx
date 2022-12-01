// libraries
import PropTypes from "prop-types";

// components
import arrow from "../../../../assets/Icons/arrow.svg";
import user from "../assets/friend-1.svg";

// styles
import styles from "./header.module.sass";

// hooks
import { useNavigate } from "react-router-dom";

export default function HeaderMobile({
  title,
  userImage = user,
  showArrow = true,
  showUserImage = true,
  isTitleCenter = false
}) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {showArrow && (
        <img className={styles.arrow} src={arrow} alt="arrow" onClick={() => navigate(-1)} />
      )}
      <div className={`${styles.title} ${isTitleCenter ? styles.center : styles.left}`}>
        {showUserImage && <img className={styles.friend} src={userImage} alt="Image friend" />}
        <p>{title}</p>
      </div>
      <img className={styles.user} src={userImage} alt="user" />
    </div>
  );
}

HeaderMobile.propTypes = {
  title: PropTypes.string,
  userImage: PropTypes.string,
  showArrow: PropTypes.bool,
  showUserImage: PropTypes.bool,
  isTitleCenter: PropTypes.bool
};
