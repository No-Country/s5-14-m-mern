import { useParams } from "react-router-dom";

// constants
import { FRIENDS } from "../utils/friendsList";

// styles
import styles from "./messagerUser.module.sass";

export default function MessageUser() {
  const { userId } = useParams();

  const [friend] = FRIENDS.filter(friend => {
    return friend.userId === userId;
  });

  return (
    <div className={styles.container}>
      <div className={styles.messageUserWraper}>
        <div className={styles.title}>
          <p>{friend.name}</p>
        </div>
        <div className={styles.optionsWraper}>
          <div className={styles.friendImage}>
            <img src={friend.image} alt={friend.name} />
          </div>
          <div className={styles.friendsOptions}>
            <button>Enviar mensaje</button>
            <button>Desafiar</button>
            <button>Dejar de ser amigos</button>
          </div>
        </div>
      </div>
    </div>
  );
}
