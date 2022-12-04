// utils
import { CHAT_SETIONS } from "../utils/chatSetions";
import { USER_OPTIONS } from "../utils/userOptions";

// styles
import styles from "./messagerUser.module.sass";

// hocs
import messagesResponsive from "../../../hocs/messageResponsive";

// hooks
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import {
  setFirstSectionOfPage,
  setThirdSectionOfPage,
  setSelectUser
} from "../../../redux/slices/messages/messagesSlice";

// components
import HeaderDesktop from "../HeaderDesktop";

function UserOptionsSection() {
  const currentUser = useSelector(state => state.message.currentUser);

  const isTablet = useMediaQuery({
    query: "(min-width: 778px)"
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handledSendMessage = () => {
    if (!isTablet) navigate("/messages/chat");
    dispatch(setSelectUser(true));
  };

  const toBack = () => dispatch(setFirstSectionOfPage(CHAT_SETIONS.searchFriends));

  const handledChallengePage = () => {
    if (!isTablet) navigate("/messages/challenge");
    dispatch(setThirdSectionOfPage(CHAT_SETIONS.predefinedMessagesWithChallenge));
  };

  const title = "Amigo";

  return (
    <div className={styles.container}>
      <HeaderDesktop
        showUserImage={false}
        isTitleCenter={true}
        title={title}
        handledPage={toBack}
      />
      <div className={styles.messageUserWraper}>
        <div className={styles.title}>
          <p>{currentUser?.name}</p>
        </div>
        <div className={styles.optionsWraper}>
          <div className={styles.friendImage}>
            <img src={currentUser?.image} alt={currentUser?.name} />
          </div>
          <div className={styles.friendsOptions}>
            <button onClick={handledSendMessage}>{USER_OPTIONS.SEND_MESSAGE}</button>
            <button onClick={handledChallengePage}>{USER_OPTIONS.TO_CHALLENGE}</button>
            <button>{USER_OPTIONS.DELETE_FRIEND}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default messagesResponsive(UserOptionsSection);
