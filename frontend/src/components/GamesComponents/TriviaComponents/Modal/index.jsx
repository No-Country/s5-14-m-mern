import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./modal.module.sass";
import iconClose from "../../../../Games/Trivia/assets/iconClose.svg";

export default function Modal({ showModal = false, title, playAgain, content }) {
  const [show, setShow] = useState(showModal);

  return (
    show && (
      <div className={styles.container}>
        <div className={styles.modal}>
          <img
            src={iconClose}
            alt="close"
            onClick={() => setShow(false)}
            className={styles.closeButton}
          />
          <div className={styles.title}>
            <p>{title}</p>
          </div>
          <div className={styles.content}>
            <p>{content}</p>
          </div>
          <div className={styles.footer}>
            <Link to="/" className={styles.button}>
              Salir
            </Link>
            <button className={styles.button} onClick={playAgain}>
              Jugar de nuevo
            </button>
          </div>
        </div>
      </div>
    )
  );
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  playAgain: PropTypes.func
};
