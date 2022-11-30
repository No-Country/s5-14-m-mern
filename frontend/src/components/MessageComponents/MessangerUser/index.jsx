// components
import LayoutMobile from "../LayoutMobile";

// utils
import { FRIENDS } from "../utils/friendsList";
import { CHAT_SETIONS } from "../utils/chatSetions";

// styles
import styles from "./messagerUser.module.sass";

// assets
import arrow from "../../../../assets/Icons/arrow.svg";

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
  console.log(friend);
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

  return (
    <LayoutMobile showArrow={true} showNavbar={false} title={friend.name} showHeader={true}>
      <div className={styles.arrow}>
        <img src={arrow} alt="to back" />
      </div>
      <div className={styles.container}>
        <div className={styles.messageUserWraper}>
          <div className={styles.title}>
            <p>{friend.name}</p>
          </div>
          <div className={styles.optionsWraper}>
            <div className={styles.friendImage}>
              <img src={friend.image} alt={friend.name} />
            </div>
            <div className={styles.friendsOptions}>
              <button onClick={handledSendMessage}>{USER_OPTION.SEND_MESSAGE}</button>
              <button>{USER_OPTION.TO_CHALLENGE}</button>
              <button>{USER_OPTION.DELETE_FRIEND}</button>
            </div>
          </div>
        </div>
      </div>
    </LayoutMobile>
  );
}
