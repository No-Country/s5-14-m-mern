import SearchWraper from "../SearchWraper/index";
import ChatWraper from "../ChatWraper/index";
import styles from "./messagesDesktop.module.sass";
import { useSelector } from "react-redux";
import { CHAT_SETIONS } from "../utils/chatSetions";
import MessageUser from "../MessangerUser";
import DefaultMessages from "../DefaultMessages";
import ChallengeMessage from "../ChallengeMessage";

export default function MessagesDesktop() {
  const currentPage = useSelector(state => state.message.currentPage);
  console.log(currentPage, "pagina actual");

  const isChatPage = currentPage === CHAT_SETIONS.chat;
  const isUserOptions = currentPage === CHAT_SETIONS.userOptions;
  const isOtherPage = !isChatPage && !isUserOptions;
  const isDefaultMessage = currentPage === CHAT_SETIONS.predefinedMessages;
  const isChallenge = currentPage === CHAT_SETIONS.predefinedMessagesWithChallenge;

  return (
    <div className={styles.container}>
      <div className={styles.chatSections}>
        <SearchWraper />
        {isChatPage && <ChatWraper />}
        {isUserOptions && <MessageUser />}
        {isOtherPage && <ChatWraper />}
        {isDefaultMessage && <DefaultMessages />}
        {isChallenge && <ChallengeMessage />}
      </div>
    </div>
  );
}
