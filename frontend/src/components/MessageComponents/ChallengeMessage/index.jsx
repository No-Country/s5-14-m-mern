import styles from "./challenge.module.sass";
import SearchFriends from "../SearchFriends/index";
import Ajedrez from "../../../../assets/Imagescards/chess.svg";

export default function ChallengeMessage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Desafía un juego</p>
      </div>
      <p className={styles.title}>Elige el juego con cual quieres desafiar</p>
      <SearchFriends />
      <p className={styles.title}>Recomendaciones:</p>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <img className={styles.cardImage} src={Ajedrez} alt="Ajedrez" />
          <span className={styles.cardTitle}>Aprende Ajedrez</span>
        </div>
        <div className={styles.actionCard}>
          <p>Desafiar</p>
        </div>
      </div>
    </div>
  );
}
