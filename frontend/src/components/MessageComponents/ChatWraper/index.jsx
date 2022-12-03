// hooks
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setThirdSectionOfPage } from "../../../redux/slices/messages/messagesSlice";

// hocs
import messagesResponsive from "../../../hocs/messageResponsive";

// components
import message from "../../../../assets/Icons/Message.svg";
import HeaderDesktop from "../HeaderDesktop";
import MessageList from "../MessageList";

// utils
import { CHAT_SETIONS } from "../utils/chatSetions";

// style
import styles from "./chat.module.sass";

function ChatWraper() {
  const currentUser = useSelector(state => state.message.currentUser);
  const selectUser = useSelector(state => state.message.selectUser);

  const isTablet = useMediaQuery({
    query: "(min-width: 778px)"
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handledPage = () => {
    if (!isTablet) {
      navigate("/messages/defaultMessages");
    }
    dispatch(setThirdSectionOfPage(CHAT_SETIONS.predefinedMessages));
  };

  const title = "Selecciona un amigo para chatear";
  const selectMessage = "Selecciona un mensaje";
  return (
    <div className={styles.container}>
      <HeaderDesktop showUserImage={false} showArrow={false} isTitleCenter={true} title={title} />
      <div className={styles.messageContainer}>
        {selectUser ? (
          <MessageList messajeList={currentUser?.messages} ownId={"123456"} />
        ) : (
          <img src={message} alt="Mensaje" />
        )}
      </div>
      {selectUser && (
        <button className={styles.selectMessage} onClick={handledPage}>
          {selectMessage}
        </button>
      )}
    </div>
  );
}

export default messagesResponsive(ChatWraper);
