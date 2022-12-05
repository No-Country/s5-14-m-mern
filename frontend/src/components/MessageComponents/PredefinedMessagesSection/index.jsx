// libraries
import EmojiPicker, { Theme, EmojiStyle, Categories } from "emoji-picker-react";

// hooks
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setThirdSectionOfPage } from "../../../redux/slices/messages/messagesSlice";

// hocs
import messagesResponsive from "../../../hocs/messageResponsive";
import useServices from "../../../services/useServices";

// utils
import { CHAT_SETIONS } from "../utils/chatSetions";
// import { GREETING } from "../utils/greeting";

// styles
import styles from "./defaultMessages.module.sass";
import DefaultMessagesHeader from "../DefaultMessageHeader";
import { useEffect, useState } from "react";

function PredefinedMessagesSection() {
  const { chat } = useServices();
  const [phrases, setPhrases] = useState();

  const isTablet = useMediaQuery({
    query: "(min-width: 778px)"
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { data } = await chat.getPhrases();
      setPhrases(data);
    })();
  }, []);

  const handledPage = () => {
    if (!isTablet) {
      navigate("/messages/challenge");
    }
    dispatch(setThirdSectionOfPage(CHAT_SETIONS.predefinedMessagesWithChallenge));
  };

  const toBack = () => dispatch(setThirdSectionOfPage(null));

  return (
    <div className={styles.container}>
      {!phrases ? (
        <p>Cargando</p>
      ) : (
        <>
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
              {phrases.saludos.map(phrase => {
                return (
                  <div className={styles.greetingButton} key={phrase._id}>
                    {phrase.phrase}
                  </div>
                );
              })}
            </div>
            <div className={styles.greeting}>
              <p className={styles.title}>Cotidianas</p>
              {phrases.cotidianas.map(phrase => (
                <div className={styles.dailygButton} key={phrase._id}>
                  {phrase.phrase}
                </div>
              ))}
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
                  },
                  {
                    name: "Animals & Nature",
                    category: Categories.ANIMALS_NATURE
                  }
                ]}
                emojiStyle={EmojiStyle.TWITTER}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default messagesResponsive(PredefinedMessagesSection);