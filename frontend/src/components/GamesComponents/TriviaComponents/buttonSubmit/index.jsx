import PropTypes from "prop-types";
import styles from "./buttonSubmit.module.sass";

export default function ButtonSubmit({ show = true }) {
  return (
    <button
      className={styles.button}
      style={{ background: show ? "#7281A9" : "#0A39B1" }}
      type="submit"
      disabled={show}>
      Next
    </button>
  );
}

ButtonSubmit.propTypes = {
  value: PropTypes.string,
  show: PropTypes.bool
};
