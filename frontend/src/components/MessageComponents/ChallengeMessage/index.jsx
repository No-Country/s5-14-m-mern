// hooks
import { useDispatch } from "react-redux";
import { setThirdSectionOfPage } from "../../../redux/slices/messages/messagesSlice";

// hocs
import messagesResponsive from "../../../hocs/messageResponsive";

// components
import SearchFriends from "../SearchFriends/index";
import Ajedrez from "../../../../assets/Imagescards/chess.svg";
import DefaultMessagesHeader from "../DefaultMessageHeader";

// utils
import { CHAT_SETIONS } from "../utils/chatSetions";

// styles
import styles from "./challenge.module.sass";

function ChallengeMessage() {
  const SELECT_CHALLENGE = "Elige el juego con cual quieres desafiar";
  const RECOMMENDATIONS = "Recomendaciones:";
  const CARD_TITLE = "Aprende ajedrez";
  const ACTION_TITLE = "Desafiar";
  const TITLE = "Desafía un juego";

  const dispatch = useDispatch();

  const toBack = () => dispatch(setThirdSectionOfPage(CHAT_SETIONS.predefinedMessages));

  return (
    <div className={styles.container}>
      <DefaultMessagesHeader title={TITLE} className={styles.header} handledPage={toBack} />
      <div className={styles.message}>
        <p className={styles.title}>{SELECT_CHALLENGE}</p>
        <SearchFriends />
        <p className={styles.title}>{RECOMMENDATIONS}</p>
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img className={styles.cardImage} src={Ajedrez} alt="Ajedrez" />
            <span className={styles.cardTitle}>{CARD_TITLE}</span>
          </div>
          <div className={styles.actionCard}>
            <p>{ACTION_TITLE}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default messagesResponsive(ChallengeMessage);
