import PropTypes from "prop-types";
// components
import CardOption from "../CardOption";
import ButtonSubmit from "../buttonSubmit";
import ShowAnswer from "../showAnswer";
import Toast from "../Toast";
import SuccessesAndFailures from "../successesAndFailures";
import Progress from "../ProgressBar/Progress";
import Modal from "../Modal";

// styles
import styles from "./optionContainer.module.sass";

// utils
import { questions } from "../../triviaUtils/constants/triviaquestions";
import { useEffect, useState } from "react";

// hooks
import useChronometer from "../../hooks/useChronometer";

export default function OptionsContainer({ questionsNumber }) {
  const [questionNumberCurrent, setQuestionNumberCurrent] = useState(0);
  const [win, setWin] = useState(false);
  const [successNumber, setSuccessNumber] = useState(0);
  const [faildNumber, setFaildNumber] = useState(0);
  const [toasText, setToastText] = useState("");
  const { minutes, seconds, percentaje, time, setTime, setCronometro } = useChronometer({
    fullTimer: 10000
  });
  const {
    question: questionCurrent,
    options: optionsCurrent,
    answer
  } = questions[questionNumberCurrent];
  const [showModal, setShowModal] = useState(false);

  const FAILD_COLOR = "#FF1E1E";
  const SUCCES_COLOR = "#4ECB71";

  const YOU_LOST = "Perdistes";
  const YOU_WIN = "Ganastes";

  useEffect(() => {
    const endOfTime = time === 10000;
    if (endOfTime) {
      setFaildNumber(f => f + 1);
      setToastText(YOU_LOST);
      setWin(true);
    }
  }, [time, questionNumberCurrent]);

  const handledGameReset = () => {
    setTime(0);
    setWin(false);
    setQuestionNumberCurrent(0);
    setCronometro(true);
    setSuccessNumber(0);
    setFaildNumber(0);
    setShowModal(false);
  };

  const handledAnwer = e => {
    const gameOver = questionNumberCurrent === 2;
    const correctAnswer = e === answer;
    setWin(true);
    setCronometro(false);
    if (correctAnswer) {
      setSuccessNumber(s => s + 1);
      setToastText(YOU_WIN);
    } else {
      setFaildNumber(f => f + 1);
      setToastText(YOU_LOST);
    }
    if (gameOver) {
      console.log(questionNumberCurrent);
      setShowModal(true);
      faildNumber > successNumber ? setToastText(YOU_LOST) : setToastText(YOU_WIN);
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    setQuestionNumberCurrent(e => e + 1);
    setWin(false);
    setTime(0);
    setCronometro(true);
  };
  return (
    <div className={styles.container}>
      <Progress minutes={minutes} seconds={seconds} percentaje={percentaje} />
      <SuccessesAndFailures success={successNumber} failures={faildNumber} />
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.containerOfQuestionAndOptions}>
          <div className={styles.questionNumber}>{`Pregunta ${
            questionNumberCurrent + 1
          }/${questionsNumber}`}</div>
          <div className={styles.question}>{questionCurrent}</div>
          <div className={styles.cardsOptionsContainer}>
            {optionsCurrent.map(opt => {
              return (
                <CardOption
                  key={opt}
                  style={{
                    border: `solid 1px ${win && (opt === answer ? SUCCES_COLOR : FAILD_COLOR)}`
                  }}
                  optionValue={opt}
                  value={opt}
                  disabled={win}
                  onClick={() => handledAnwer(opt)}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.containerOfButtonAndAnswer}>
          {win && <ShowAnswer answer={answer} />}
          <ButtonSubmit show={!win} />
        </div>
      </form>
      <Toast
        content={toasText}
        style={{ background: `${toasText === YOU_LOST ? FAILD_COLOR : SUCCES_COLOR}` }}
        showToast={win}
      />
      <Modal
        content={toasText}
        showModal={showModal}
        title="Juego terminado"
        playAgain={handledGameReset}
      />
    </div>
  );
}

OptionsContainer.propTypes = {
  question: PropTypes.string,
  options: PropTypes.array,
  questionsNumber: PropTypes.number
};
