// libraries
import EmojiPicker, { Theme, EmojiStyle, Categories } from "emoji-picker-react";

// hooks
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setThirdSectionOfPage } from "../../../redux/slices/messages/messagesSlice";

// hocs
import messagesResponsive from "../../../hocs/messageResponsive";

// utils
import { CHAT_SETIONS } from "../utils/chatSetions";

// styles
import styles from "./defaultMessages.module.sass";
import DefaultMessagesHeader from "../DefaultMessageHeader";

function DefaultMessages() {
  const GREETING = ["¡Hola!", "¿Cómo estás?", "¡Buenas tardes!", "¡Buend día!", "Buenas Noches"];
  const isTablet = useMediaQuery({
    query: "(min-width: 778px)"
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(isTablet, "media");

  const handledPage = () => {
    if (!isTablet) {
      navigate("/messages/challenge");
    }
    dispatch(setThirdSectionOfPage(CHAT_SETIONS.predefinedMessagesWithChallenge));
  };

  const toBack = () => dispatch(setThirdSectionOfPage(null));

  return (
    <div className={styles.container}>
      <DefaultMessagesHeader title="Selecciona el mensaje" handledPage={toBack} />
      <div className={styles.message}>
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
    </div>
  );
}

export default messagesResponsive(DefaultMessages);
