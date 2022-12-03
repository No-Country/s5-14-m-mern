// libraries
import PropTypes from "prop-types";

// styles
import styles from "./messageList.module.sass";

export default function MessageList({ messajeList = [], ownId }) {
  return (
    <div className={styles.container}>
      {messajeList.map(({ text, sendId }, index) => {
        return (
          <div
            key={index}
            className={`${styles.text} ${
              sendId === ownId ? styles.ownMessage : styles.defaultMessage
            }`}>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
}

MessageList.propTypes = {
  messajeList: PropTypes.array,
  ownId: PropTypes.string
};
