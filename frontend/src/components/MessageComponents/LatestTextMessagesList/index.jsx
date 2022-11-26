import PropTypes from "prop-types";

// styles
import styles from "./latestTextMessageList.module.sass";

export default function LastestTextMessageList({ messageList }) {
  return (
    <div className={styles.container}>
      {messageList.forEach(({ image, name, message, showMessage }) => {
        <div className={styles.friend} key={image}>
          <img className={styles.FriendImage} src={image} alt="friends" />
          {showMessage && <div className={styles.showMessage} />}

          <div>
            <p className={styles.message}>{message}</p>
            <p className={styles.name}>{name}</p>
          </div>
        </div>;
      })}
    </div>
  );
}

LastestTextMessageList.propTypes = {
  messageList: PropTypes.array
};
