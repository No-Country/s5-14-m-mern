// libraries
import PropTypes from "prop-types";

// styles
import styles from "./messageList.module.sass";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function MessageList() {
  const { userLogged } = useSelector(state => state.auth);
  const { currentChat } = useSelector(state => state.message);
  const [messages, setMessages] = useState();
  const [loading, setLoading] = useState(true);
  // socket.emit("joinRoom", currentChat.room, message => {
  //   console.log("Unido a la sala " + message);
  // });

  // console.log("ME CONECTOOOOOOOOOOOOOO");

  // return () => {
  //   socket.emit("leaveRoom", currentChat.room, message => {
  //     console.log("Dejo la sala " + message);
  //   });
  // };

  // }, []);

  useEffect(() => {
    if (currentChat.message) {
      setMessages(currentChat.messages);
      setLoading(false);
    }
  }, [currentChat]);

  return (
    <div className={styles.container}>
      {!loading &&
        messages.map(({ id, message, icon }, index) => (
          <div
            key={index}
            className={`${styles.text} ${
              id !== userLogged.id ? styles.ownMessage : styles.defaultMessage
            }`}>
            <p className={icon ? styles.icon : styles.text}>{message}</p>
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
