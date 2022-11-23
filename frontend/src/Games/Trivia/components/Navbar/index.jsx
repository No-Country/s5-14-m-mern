import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// assets
import ArrowBack from "../../assets/ToBack.svg";

// styles
import styles from "./navbar.module.sass";

export default function NavBar({ title = "" }) {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <img alt="toBack" src={ArrowBack} className={styles.arrowToBack} />
      </NavLink>
      <p className={styles.title}>{title}</p>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string
};
