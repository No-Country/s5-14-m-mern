import styles from "./defaultMessages.module.sass";
import EmojiPicker, { Theme, EmojiStyle, Categories } from "emoji-picker-react";
import { useNavigate } from "react-router-dom";
import { setPage } from "../../../redux/slices/messages/messagesSlice";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { CHAT_SETIONS } from "../utils/chatSetions";

export default function DefaultMessages() {
  const GREETING = ["¡Hola!", "¿Cómo estás?", "¡Buenas tardes!", "¡Buend día!", "Buenas Noches"];
  const isTablet = useMediaQuery({
    query: "(min-width: 778px)"
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handledPage = () => {
    if (!isTablet) {
      navigate("/messages/challenge");
    }
    dispatch(setPage(CHAT_SETIONS.predefinedMessagesWithChallenge));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Desafía un juego</p>
      </div>
      <div className={styles.greeting}>
        <p className={styles.title}>Desafiar a un amigo</p>
        <div className={styles.challengeButton} onClick={handledPage}>
          ¡Te desafio en el juego!
        </div>
      </div>
      <div className={styles.greeting}>
        <p className={styles.title}>Saludos y despedidas</p>
        {GREETING.map(greeting => {
          return (
            <div className={styles.greetingButton} key={greeting}>
              {greeting}
            </div>
          );
        })}
      </div>
      <div className={styles.greeting}>
        <p className={styles.title}>Cotidianas</p>
        {GREETING.map(greeting => {
          return (
            <div className={styles.dailygButton} key={greeting}>
              {greeting}
            </div>
          );
        })}
      </div>
      <div className={styles.greeting}>
        <p className={styles.title}>Emoticones</p>
        <EmojiPicker
          theme={Theme.DARK}
          height={500}
          width={310}
          skinTonesDisabled
          lazyLoadEmojis={true}
          size={36}
          categories={[
            {
              name: "Smiles & Emotions",
              category: Categories.SMILEYS_PEOPLE
            }
          ]}
          emojiStyle={EmojiStyle.TWITTER}
        />
      </div>
    </div>
  );
}
