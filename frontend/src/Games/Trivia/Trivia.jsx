import { NavLink } from "react-router-dom";

// components
import OptionsContainer from "../../components/GamesComponents/TriviaComponents/OptionsContainer";

// assets
import ArrowBack from "./assets/ToBack.svg";

// styles
import styles from "./triavia.module.sass";

export default function TriviaPage() {
  const title = "Quiz";
  return (
    <div className={styles.containerPageOfTrivia}>
      <main className={styles.container}>
        <nav className={styles.nav}>
          <NavLink to="/">
            <img alt="toBack" src={ArrowBack} className={styles.arrowToBack} />
          </NavLink>
          <p className={styles.title}>{title}</p>
        </nav>
        <OptionsContainer questionsNumber={3} />
      </main>
    </div>
  );
}
