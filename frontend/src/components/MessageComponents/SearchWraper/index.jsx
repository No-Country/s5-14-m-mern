// components
import FriendsList from "../FriendsList";
import SearchFriends from "../SearchFriends";
import LastestTextMessageList from "../LatestTextMessagesList";
import HeaderDesktop from "../HeaderDesktop";

// hooks
import { useState } from "react";

// constantes
import { FRIENDS } from "../utils/friendsList";

// styles
import styles from "./searchWraper.module.sass";

export default function SearchWraper() {
  const [friend, setFriend] = useState(FRIENDS);

  const handlesSearchFriend = key => {
    const listOfFriend = FRIENDS.filter(({ name }) => {
      const letters = key.target.value;
      return name.includes(letters);
    });
    setFriend(listOfFriend);
  };

  return (
    <div className={styles.container}>
      <HeaderDesktop showUserImage={false} showArrow={false} isTitleCenter={true} title="Amigos" />
      <FriendsList friendsList={FRIENDS} />
      <SearchFriends handledSearch={handlesSearchFriend} placeholder="Buscar jugadores" />
      <LastestTextMessageList messageList={friend} />
    </div>
  );
}
