import LayoutMobile from "../LayoutMobile";

// style
import styles from "./chat.module.sass";

export default function ChatWraper() {
  return (
    <LayoutMobile showArrow={true} isTitleCenter={false} showNavbar={false} showUserImage={true}>
      Soy el chat
      <button className={styles.selectMessage}>Selecciona Mensaje</button>
    </LayoutMobile>
  );
}
