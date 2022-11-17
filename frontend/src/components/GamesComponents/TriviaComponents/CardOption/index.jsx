import { Field } from "formik";
import PropTypes from "prop-types";

// styles
import styles from "./cardOption.module.sass";

export default function CardOption({ value }) {
  return (
    <label className={styles.container}>
      <Field className={styles.checkbox} type="checkbox" name="checkbox" />
      {value}
    </label>
  );
}

CardOption.propTypes = {
  value: PropTypes.string
};
