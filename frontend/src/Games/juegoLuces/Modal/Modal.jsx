import PropTypes from "prop-types";
import style from "./modal.module.sass";

const Modal = ({ play, startGame, score }) => {
  return (
    !play && (
      <div className={style.modal}>
        {score !== "0" && (
          <div>
            <h2 className={style.message}>Ganaste</h2>
            <p className={style.score}>Score: {score}</p>
          </div>
        )}
        <div className={style.button}>
          <button className={style.play} onClick={startGame}>
            {score === "0" ? "a" : "b"}
          </button>
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  play: PropTypes.bool,
  startGame: PropTypes.func,
  score: PropTypes.string
};

export default Modal;
