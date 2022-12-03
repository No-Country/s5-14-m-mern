// components
import FriendsList from "../FriendsList";
import SearchFriends from "../SearchFriends";
import LastestTextMessageList from "../LatestTextMessagesList";
import HeaderDesktop from "../HeaderDesktop";

// styles
import styles from "./searchWraper.module.sass";

// constantes
import { FRIENDS } from "../utils/friendsList";

export default function SearchWraper() {
  return (
    <div className={styles.container}>
      <HeaderDesktop showUserImage={false} showArrow={false} isTitleCenter={true} title="Amigos" />
      <FriendsList friendsList={FRIENDS} />
      <SearchFriends />
      <LastestTextMessageList messageList={FRIENDS} />
    </div>
  );
}
