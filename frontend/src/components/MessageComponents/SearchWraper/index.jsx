// components
import FriendsList from "../FriendsList";
import SearchFriends from "../SearchFriends";
import LastestTextMessageList from "../LatestTextMessagesList";

// styles
import styles from "./searchWraper.module.sass";

// constantes
import { FRIENDS } from "../utils/friendsList";
import LayoutMobile from "../LayoutMobile";

export default function SearchWraper() {
  const title = "Amigos";
  return (
    <LayoutMobile title="Amigos">
      <div className={styles.container}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <FriendsList friendsList={FRIENDS} />
        <SearchFriends />
        <LastestTextMessageList messageList={FRIENDS} />
      </div>
    </LayoutMobile>
  );
}
