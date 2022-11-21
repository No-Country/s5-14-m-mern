import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./toast.module.sass";

export default function Toast({ content, style, show = true, timeout = 5000 }) {
  const [isShow, setIsShow] = useState(show);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, timeout);
  }, [timeout]);

  return (
    isShow && (
      <div className={styles.container} style={style}>
        <div className={styles.content}>{content}</div>
      </div>
    )
  );
}

Toast.propTypes = {
  content: PropTypes.string,
  style: PropTypes.object,
  show: PropTypes.bool,
  timeout: PropTypes.number
};
