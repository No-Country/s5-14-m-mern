import PropTypes from "prop-types";
import { useState } from "react";

// assets
import arrow from "../../../../Games/Trivia/assets/arrowBottom.svg";

// styles
import styles from "./showAnswer.module.sass";

export default function ShowAnswer({ answer = "d" }) {
  const [show, setShow] = useState(false);

  const handledShow = () => {
    setShow(!show);
  };

  return (
    <div className={styles.container}>
      <label>
        <p>Mostrar Respuesta</p>
        <img src={arrow} alt="Show answer" onClick={handledShow} />
      </label>
      {show && <p>{answer}</p>}
    </div>
  );
}

ShowAnswer.propTypes = {
  answer: PropTypes.string
};
