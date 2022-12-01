// style
import { useNavigate } from "react-router-dom";
import styles from "./chat.module.sass";
import message from "../../../../assets/Icons/Message.svg";
import { useSelector, useDispatch } from "react-redux";
import { CHAT_SETIONS } from "../utils/chatSetions";
import { useMediaQuery } from "react-responsive";
import { setPage } from "../../../redux/slices/messages/messagesSlice";

export default function ChatWraper() {
  const currentUser = useSelector(state => state.message.currentUserId);

  const isTablet = useMediaQuery({
    query: "(min-width: 778px)"
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handledPage = () => {
    if (!isTablet) {
      navigate("/messages/defaultMessages");
    }
    dispatch(setPage(CHAT_SETIONS.predefinedMessages));
  };

  const title = "selecciona un amigo para chatear";
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.messageContainer}>
        {!currentUser && <img src={message} alt="Mensaje" />}
      </div>
      {currentUser && (
        <button className={styles.selectMessage} onClick={handledPage}>
          Selecciona Mensaje
        </button>
      )}
    </div>
  );
}
