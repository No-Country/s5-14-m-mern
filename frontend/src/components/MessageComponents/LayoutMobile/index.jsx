// libraries
import PropTypes from "prop-types";

// components
import HeaderMobile from "../HeaderMobile";
import { Navbar } from "../../PagesComponents/Navbar/Navbar";

// styles
import styles from "./layout.module.sass";

export default function LayoutMobile({
  children,
  title = "nameExample",
  showNavbar = true,
  showArrow = false,
  showUserImage = false,
  isTitleCenter = true,
  showHeader = true
}) {
  return (
    <div className={styles.layout_content}>
      {showHeader && (
        <HeaderMobile
          title={title}
          showArrow={showArrow}
          showUserImage={showUserImage}
          isTitleCenter={isTitleCenter}
        />
      )}
      {children}
      {showNavbar && (
        <div className={styles.remove}>
          <Navbar />
        </div>
      )}
    </div>
  );
}

LayoutMobile.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
  showNavbar: PropTypes.bool,
  showArrow: PropTypes.bool,
  showUserImage: PropTypes.bool,
  isTitleCenter: PropTypes.bool,
  showHeader: PropTypes.bool
};
