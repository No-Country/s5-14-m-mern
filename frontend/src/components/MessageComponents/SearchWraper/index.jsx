// components
import FriendsList from "../FriendsList";
import SearchFriends from "../SearchFriends";
import LastestTextMessageList from "../LatestTextMessagesList";

// styles
import styles from "./searchWraper.module.sass";

// constantes
import { FRIENDS } from "../utils/friendsList";
import LayoutMobile from "../LayoutMobile";
import { useEffect } from "react";

export default function SearchWraper() {
  const mediaqueryList = window.matchMedia("(min-width: 920px)");

  useEffect(() => {
    if (mediaqueryList.matches) {
      alert("es 920px");
      console.log(mediaqueryList);
    }
  }, [mediaqueryList]);

  return (
    <LayoutMobile title="Amigos">
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Amigos</p>
        </div>
        <FriendsList friendsList={FRIENDS} />
        <SearchFriends />
        <LastestTextMessageList messageList={FRIENDS} />
      </div>
    </LayoutMobile>
  );
}
