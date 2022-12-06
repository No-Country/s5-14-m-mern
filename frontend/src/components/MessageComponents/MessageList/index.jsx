// libraries
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// styles
import styles from "./messageList.module.sass";

export default function MessageList() {
  const { userLogged } = useSelector(state => state.auth);
  const { currentChat } = useSelector(state => state.message);

  return (
    <div className={styles.container}>
      {currentChat?.messages.map(({ id, message }, index) => (
        <div
          key={index}
          className={`${styles.text} ${
            id !== userLogged.id ? styles.ownMessage : styles.defaultMessage
          }`}>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}

MessageList.propTypes = {
  messajeList: PropTypes.array,
  ownId: PropTypes.string,
  chat: PropTypes.array
};
