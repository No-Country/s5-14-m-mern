import { Formik, Form } from "formik";
import PropTypes from "prop-types";
// components
import CardOption from "../CardOption";
import ButtonSubmit from "../buttonSubmit";
import ShowAnswer from "../showAnswer";

// styles
import styles from "./optionContainer.module.sass";

// utils
import { questions } from "../../../../utils/triviaUtils/constants/triviaquestions";

export default function OptionsContainer({ question, options, questionsNumber }) {
  const questionNumberCurrent = 0;
  const { question: questionCurrent, options: optionsCurrent, answer } = questions[0];
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          checked: []
        }}
        onSubmit={values => {
          console.log(values);
        }}>
        <Form className={styles.form}>
          <div className={styles.containerOfQuestionAndOptions}>
            <div
              className={
                styles.questionNumber
              }>{`Pregunta ${questionNumberCurrent}/${questionsNumber}`}</div>
            <div className={styles.question}>{questionCurrent}</div>
            <div className={styles.cardsOptionsContainer}>
              {optionsCurrent.map(opt => {
                return <CardOption key={opt} optionValue={opt} value={opt} />;
              })}
            </div>
          </div>
          <div className={styles.containerOfButtonAndAnswer}>
            <ShowAnswer answer={answer} />
            <ButtonSubmit value={"Next"} />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

OptionsContainer.propTypes = {
  question: PropTypes.string,
  options: PropTypes.array,
  questionsNumber: PropTypes.number
};
