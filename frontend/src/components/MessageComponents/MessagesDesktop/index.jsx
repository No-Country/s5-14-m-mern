// hooks
import { useSelector } from "react-redux";

// utils
import { CHAT_SETIONS } from "../utils/chatSetions";

// components
import MessageUser from "../MessangerUser";
import DefaultMessages from "../DefaultMessages";
import ChallengeMessage from "../ChallengeMessage";
import SearchWraper from "../SearchWraper/index";
import ChatWraper from "../ChatWraper/index";

// styles
import styles from "./messagesDesktop.module.sass";

export default function MessagesDesktop() {
  const firstSectionOfPage = useSelector(state => state.message.firstSectionOfPage);
  const secondSectionOfPage = useSelector(state => state.message.secondSectionOfPage);
  const thirdSectionOfPage = useSelector(state => state.message.thirdSectionOfPage);

  const SECTIONS = {
    [CHAT_SETIONS.chat]: ChatWraper,
    [CHAT_SETIONS.predefinedMessages]: DefaultMessages,
    [CHAT_SETIONS.predefinedMessagesWithChallenge]: ChallengeMessage,
    [CHAT_SETIONS.searchFriends]: SearchWraper,
    [CHAT_SETIONS.userOptions]: MessageUser
  };

  const FirstSection = SECTIONS[firstSectionOfPage];
  const SecondSection = SECTIONS[secondSectionOfPage];
  const ThirdSection = SECTIONS[thirdSectionOfPage];

  return (
    <div className={styles.container}>
      <div className={styles.chatSections}>
        <FirstSection />
        <SecondSection />
        {ThirdSection && <ThirdSection />}
      </div>
    </div>
  );
}
