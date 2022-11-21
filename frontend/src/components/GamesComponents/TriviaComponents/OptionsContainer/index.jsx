import { Formik, Form } from "formik";
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
import { questions } from "../../../../utils/triviaUtils/constants/triviaquestions";
import { useEffect, useState } from "react";

// hooks
import useChronometer from "../../../../Games/Trivia/hooks/useChronometer";

export default function OptionsContainer({ questionsNumber }) {
  const [questionNumberCurrent, setQuestionNumberCurrent] = useState(0);
  const [win, setWin] = useState(false);
  const {
    question: questionCurrent,
    options: optionsCurrent,
    answer
  } = questions[questionNumberCurrent];
  const [successNumber, setSuccessNumber] = useState(0);
  const [faildNumber, setFaildNumber] = useState(0);
  const [toasText, setToastText] = useState("");
  const { minutes, seconds, percentaje, time, setTime, setCronometro } = useChronometer({
    fullTimer: 10000
  });
  const [showModal, setShowModal] = useState(false);

  const faildColor = "#FF1E1E";
  const succesColor = "#4ECB71";
  useEffect(() => {
    if (time === 10000) {
      setFaildNumber(f => f + 1);
      setToastText("perdistes");
      setWin(true);
    }
    if (questionNumberCurrent === 2) {
      console.log(questionNumberCurrent);
      setShowModal(true);
    }
  }, [time, questionNumberCurrent]);

  const handledGameReset = () => {
    setTime(0);
    setQuestionNumberCurrent(0);
    setCronometro(true);
  };

  const handledAnwer = e => {
    setWin(true);
    setCronometro(false);
    if (e === answer) {
      setSuccessNumber(s => s + 1);
      setToastText("ganastes");
    } else {
      setFaildNumber(f => f + 1);
      setToastText("perdistes");
    }
  };
  return (
    <div className={styles.container}>
      <Progress minutes={minutes} seconds={seconds} percentaje={percentaje} />
      <SuccessesAndFailures success={successNumber} failures={faildNumber} />
      <Formik
        initialValues={{
          checked: []
        }}
        onSubmit={values => {
          console.log(values);
          setQuestionNumberCurrent(e => e + 1);
          setWin(false);
          setTime(0);
          setCronometro(true);
        }}>
        <Form className={styles.form}>
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
                      border: `solid 1px ${win && (opt === answer ? succesColor : faildColor)}`
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
        </Form>
      </Formik>
      <Toast content={toasText} style={{ background: "#d2691e" }} show={win} />
      <Modal showModal={showModal} title="Juego terminado" playAgain={handledGameReset} />
    </div>
  );
}

OptionsContainer.propTypes = {
  question: PropTypes.string,
  options: PropTypes.array,
  questionsNumber: PropTypes.number
};
