// styles
import styles from "./messageList.module.sass";

export default function MessageList({ messajeList = [], ownId }) {
  return (
    <div className={styles.container}>
      {messajeList.map(({ text, sendId }) => {
        return (
          <div
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
