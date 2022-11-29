import styles from "./header.module.sass";
import PropTypes from "prop-types";
import arrow from "../../../../assets/Icons/arrow.svg";
import user from "../assets/friend-1.svg";

export default function HeaderMobile({
  title,
  userImage = user,
  showArrow = true,
  showUserImage = true,
  isTitleCenter = false
}) {
  return (
    <div className={`${styles.container} ${isTitleCenter ? styles.center : styles.left}`}>
      {showArrow && <img src={arrow} alt="arrow" />}
      <div className={styles.title}>
        {showUserImage && <img src={userImage} alt="user image" />}
        <p>{title}</p>
      </div>
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
