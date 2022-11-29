import PropTypes from "prop-types";
import { Navbar } from "../../PagesComponents/Navbar/Navbar";
import styles from "./layout.module.sass";
import HeaderMobile from "../HeaderMobile";

export default function LayoutMobile({ children, title, showNavbar = true }) {
  return (
    <div className={styles.layout_content}>
      <HeaderMobile title={title} />
      {children}
      {showNavbar && <Navbar />}
    </div>
  );
}

LayoutMobile.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  showNavbar: PropTypes.bool
};
