// components
import FriendsList from "../FriendsList";
import SearchFriends from "../SearchFriends";
import LastestTextMessageList from "../LatestTextMessagesList";

// styles
import styles from "./searchWraper.module.sass";

// constantes
import { FRIENDS } from "../utils/friendsList";

export default function SearchWraper() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Amigos</p>
      </div>
      <FriendsList friendsList={FRIENDS} />
      <SearchFriends />
      <LastestTextMessageList messageList={FRIENDS} />
    </div>
  );
}
