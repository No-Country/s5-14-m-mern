// components
import SuccessesAndFailures from "../../components/GamesComponents/TriviaComponents/successesAndFailures";
import Progress from "../../components/GamesComponents/TriviaComponents/ProgressBar/Progress";
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
          <img alt="toBack" src={ArrowBack} className={styles.arrowToBack} />
          <p className={styles.title}>{title}</p>
        </nav>
        <Progress />
        <SuccessesAndFailures />
        <OptionsContainer
          question={"¿Cúal es la cuarta letra del abecedario?"}
          questionsNumber={3}
        />
      </main>
    </div>
  );
}
