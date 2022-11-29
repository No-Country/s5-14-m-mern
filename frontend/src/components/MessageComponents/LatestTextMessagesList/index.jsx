import PropTypes from "prop-types";

import { Link } from "react-router-dom";

// styles
import styles from "./latestTextMessageList.module.sass";

export default function LastestTextMessageList({ messageList }) {
  return (
    <div className={styles.container}>
      {messageList.map(({ image, name, message, showMessage, userId }) => {
        return (
          <Link className={styles.link} to={`/messages/${userId}`} key={image}>
            <div className={styles.friend}>
              <img className={styles.FriendImage} src={image} alt="friends" />
              {showMessage && <div className={styles.showMessage} />}

              <div className={styles.messageWraper}>
                <p className={styles.name}>{name}</p>
                <p className={styles.message}>{message}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

LastestTextMessageList.propTypes = {
  messageList: PropTypes.array,
  handledMessage: PropTypes.func
};
