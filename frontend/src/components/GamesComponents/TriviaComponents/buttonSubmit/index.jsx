import PropTypes from "prop-types";
import styles from "./buttonSubmit.module.sass";

export default function ButtonSubmit({ value }) {
  return (
    <button className={styles.button} type="submit">
      Next
    </button>
  );
}

ButtonSubmit.propTypes = {
  value: PropTypes.string
};
