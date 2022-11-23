import PropTypes from "prop-types";

// styles
import styles from "./navbar.module.sass";

export default function NavBar({ title = "" }) {
  return (
    <nav className={styles.nav}>
      <p className={styles.title}>{title}</p>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string
};
