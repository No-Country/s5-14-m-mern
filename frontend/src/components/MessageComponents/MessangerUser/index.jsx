// utils
import { FRIENDS } from "../utils/friendsList";
import { CHAT_SETIONS } from "../utils/chatSetions";

// styles
import styles from "./messagerUser.module.sass";

// hooks
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { setPage } from "../../../redux/slices/messages/messagesSlice";

export default function MessageUser() {
  const currentUser = useSelector(state => state.message.currentUserId);
  const [friend] = FRIENDS.filter(friend => {
    return friend.userId === currentUser;
  });
  const USER_OPTION = {
    SEND_MESSAGE: "Enviar mensaje",
    TO_CHALLENGE: "Desafiar",
    DELETE_FRIEND: "Dejar de ser amigos"
  };
  const isTablet = useMediaQuery({
    query: "(min-width: 778px)"
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handledSendMessage = () => {
    if (!isTablet) {
      navigate("/messages/chat");
    }
    dispatch(setPage(CHAT_SETIONS.chat));
  };

  const title = "friend";

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.messageUserWraper}>
          <div className={styles.title}>
            <p>{friend?.name}</p>
          </div>
          <div className={styles.optionsWraper}>
            <div className={styles.friendImage}>
              <img src={friend?.image} alt={friend?.name} />
            </div>
            <div className={styles.friendsOptions}>
              <button onClick={handledSendMessage}>{USER_OPTION.SEND_MESSAGE}</button>
              <button>{USER_OPTION.TO_CHALLENGE}</button>
              <button>{USER_OPTION.DELETE_FRIEND}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
