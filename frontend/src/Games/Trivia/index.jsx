// components
import OptionsContainer from "./components/OptionsContainer";
import NavBar from "./components/Navbar";

// styles
import styles from "./triavia.module.sass";

export default function TriviaPage() {
  const title = "Quiz";
  return (
    <div className={styles.containerPageOfTrivia}>
      <main className={styles.container}>
        <NavBar title={title} />
        <OptionsContainer questionsNumber={3} />
      </main>
    </div>
  );
}
